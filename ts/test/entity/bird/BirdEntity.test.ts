

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { VogelwarteSchweizSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('BirdEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VOGELWARTE_SCHWEIZ_TEST_LIVE=TRUE.
  afterEach(liveDelay('VOGELWARTE_SCHWEIZ_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VogelwarteSchweizSDK.test()
    const ent = testsdk.Bird()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VOGELWARTE_SCHWEIZ_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'bird.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"commonNameDe","req":false,"short":"German common name","type":"`$STRING`","index$":0},{"active":true,"name":"commonNameEn","req":false,"short":"English common name","type":"`$STRING`","index$":1},{"active":true,"name":"commonNameFr","req":false,"short":"French common name","type":"`$STRING`","index$":2},{"active":true,"name":"commonNameIt","req":false,"short":"Italian common name","type":"`$STRING`","index$":3},{"active":true,"name":"conservationStatus","req":false,"short":"IUCN conservation status","type":"`$STRING`","index$":4},{"active":true,"name":"description","req":false,"short":"Detailed description of the bird","type":"`$STRING`","index$":5},{"active":true,"name":"family","req":false,"short":"Taxonomic family","type":"`$STRING`","index$":6},{"active":true,"name":"habitat","req":false,"short":"Preferred habitats","type":"`$ARRAY`","index$":7},{"active":true,"name":"id","req":false,"short":"Unique identifier for the bird","type":"`$STRING`","index$":8},{"active":true,"format":"uri","name":"imageUrl","req":false,"short":"URL to bird image","type":"`$STRING`","index$":9},{"active":true,"name":"length","req":false,"type":"`$OBJECT`","index$":10},{"active":true,"name":"order","req":false,"short":"Taxonomic order","type":"`$STRING`","index$":11},{"active":true,"name":"scientificName","req":false,"short":"Scientific name of the bird species","type":"`$STRING`","index$":12},{"active":true,"name":"weight","req":false,"type":"`$OBJECT`","index$":13},{"active":true,"name":"wingspan","req":false,"type":"`$OBJECT`","index$":14}],"id":{"field":"id","name":"id"},"name":"bird","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":100,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"search","orig":"search","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /api/birds","json":"{\"operationId\":\"getBirds\",\"parameters\":[{\"description\":\"Maximum number of results to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":100,\"maximum\":1000,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results to skip for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Search term to filter bird species by name\",\"in\":\"query\",\"name\":\"search\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"commonNameDe\":{\"description\":\"German common name\",\"type\":\"string\"},\"commonNameEn\":{\"description\":\"English common name\",\"type\":\"string\"},\"commonNameFr\":{\"description\":\"French common name\",\"type\":\"string\"},\"commonNameIt\":{\"description\":\"Italian common name\",\"type\":\"string\"},\"conservationStatus\":{\"description\":\"IUCN conservation status\",\"type\":\"string\"},\"description\":{\"description\":\"Detailed description of the bird\",\"type\":\"string\"},\"family\":{\"description\":\"Taxonomic family\",\"type\":\"string\"},\"habitat\":{\"description\":\"Preferred habitats\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"Unique identifier for the bird\",\"type\":\"string\"},\"imageUrl\":{\"description\":\"URL to bird image\",\"format\":\"uri\",\"type\":\"string\"},\"length\":{\"properties\":{\"max\":{\"description\":\"Maximum length in cm\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum length in cm\",\"type\":\"number\"}},\"type\":\"object\"},\"order\":{\"description\":\"Taxonomic order\",\"type\":\"string\"},\"scientificName\":{\"description\":\"Scientific name of the bird species\",\"type\":\"string\"},\"weight\":{\"properties\":{\"max\":{\"description\":\"Maximum weight in grams\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum weight in grams\",\"type\":\"number\"}},\"type\":\"object\"},\"wingspan\":{\"properties\":{\"max\":{\"description\":\"Maximum wingspan in cm\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum wingspan in cm\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"limit\":{\"type\":\"integer\"},\"offset\":{\"type\":\"integer\"},\"total\":{\"description\":\"Total number of birds matching the query\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of birds\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp of the error\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp of the error\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/birds","segments":[{"lit":"api"},{"lit":"birds"}],"select":{"exist":["limit","offset","search"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"bird_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/birds/{birdId}","json":"{\"operationId\":\"getBirdById\",\"parameters\":[{\"description\":\"Unique identifier of the bird species\",\"in\":\"path\",\"name\":\"birdId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"commonNameDe\":{\"description\":\"German common name\",\"type\":\"string\"},\"commonNameEn\":{\"description\":\"English common name\",\"type\":\"string\"},\"commonNameFr\":{\"description\":\"French common name\",\"type\":\"string\"},\"commonNameIt\":{\"description\":\"Italian common name\",\"type\":\"string\"},\"conservationStatus\":{\"description\":\"IUCN conservation status\",\"type\":\"string\"},\"description\":{\"description\":\"Detailed description of the bird\",\"type\":\"string\"},\"family\":{\"description\":\"Taxonomic family\",\"type\":\"string\"},\"habitat\":{\"description\":\"Preferred habitats\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"Unique identifier for the bird\",\"type\":\"string\"},\"imageUrl\":{\"description\":\"URL to bird image\",\"format\":\"uri\",\"type\":\"string\"},\"length\":{\"properties\":{\"max\":{\"description\":\"Maximum length in cm\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum length in cm\",\"type\":\"number\"}},\"type\":\"object\"},\"order\":{\"description\":\"Taxonomic order\",\"type\":\"string\"},\"scientificName\":{\"description\":\"Scientific name of the bird species\",\"type\":\"string\"},\"weight\":{\"properties\":{\"max\":{\"description\":\"Maximum weight in grams\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum weight in grams\",\"type\":\"number\"}},\"type\":\"object\"},\"wingspan\":{\"properties\":{\"max\":{\"description\":\"Maximum wingspan in cm\",\"type\":\"number\"},\"min\":{\"description\":\"Minimum wingspan in cm\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with bird details\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp of the error\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bird not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp of the error\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/birds/{birdId}","rename":{"param":{"birdId":"id"}},"segments":[{"lit":"api"},{"lit":"birds"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"bird","name__orig":"bird","Name":"Bird","name_":"bird","name-":"bird","NAME":"BIRD","index$":0}, {"active":true,"entity":"bird","key$":"BasicBirdFlow","kind":"basic","name":"BasicBirdFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"bird_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"bird_ref01","srcdatavar":"bird_ref01_data","suffix":"_dt0"},"match":{"id":"bird01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-bird_ref01"}}],"index$":1}]}, 'Bird')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let bird_ref01_data = Object.values(setup.data.existing.bird)[0] as any

    // LIST
    const bird_ref01_ent = client.Bird()
    const bird_ref01_match: any = {}

    const bird_ref01_list = (await bird_ref01_ent.list(bird_ref01_match)).map((e: any) => e.data())


    // LOAD
    const bird_ref01_match_dt0: any = {}
    bird_ref01_match_dt0.id = bird_ref01_data.id
    const bird_ref01_data_dt0 = (await bird_ref01_ent.load(bird_ref01_match_dt0)).data()
    assert(bird_ref01_data_dt0.id === bird_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/bird/BirdTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = VogelwarteSchweizSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['bird01','bird02','bird03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VOGELWARTE_SCHWEIZ_TEST_BIRD_ENTID': idmap,
    'VOGELWARTE_SCHWEIZ_TEST_LIVE': 'FALSE',
    'VOGELWARTE_SCHWEIZ_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['VOGELWARTE_SCHWEIZ_TEST_BIRD_ENTID']

  const live = 'TRUE' === env.VOGELWARTE_SCHWEIZ_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VOGELWARTE_SCHWEIZ_TEST_BIRD_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new VogelwarteSchweizSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.VOGELWARTE_SCHWEIZ_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
