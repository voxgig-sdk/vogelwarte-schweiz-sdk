

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


describe('SpeciesEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VOGELWARTE_SCHWEIZ_TEST_LIVE=TRUE.
  afterEach(liveDelay('VOGELWARTE_SCHWEIZ_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VogelwarteSchweizSDK.test()
    const ent = testsdk.Species()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VOGELWARTE_SCHWEIZ_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'species.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"characteristics","req":false,"type":"`$OBJECT`","index$":0},{"active":true,"name":"commonNames","req":false,"type":"`$OBJECT`","index$":1},{"active":true,"name":"conservationStatus","req":false,"short":"Conservation status code","type":"`$STRING`","index$":2},{"active":true,"name":"distribution","req":false,"type":"`$OBJECT`","index$":3},{"active":true,"name":"observationCount","req":false,"short":"Number of recorded observations","type":"`$INTEGER`","index$":4},{"active":true,"name":"scientificName","req":false,"short":"Scientific name","type":"`$STRING`","index$":5},{"active":true,"name":"speciesId","req":false,"short":"Unique species identifier","type":"`$STRING`","index$":6},{"active":true,"name":"taxonomy","req":false,"type":"`$OBJECT`","index$":7}],"name":"species","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"family","orig":"family","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"habitat","orig":"habitat","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"status","orig":"status","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /api/species","json":"{\"operationId\":\"getSpecies\",\"parameters\":[{\"description\":\"Filter by bird family\",\"in\":\"query\",\"name\":\"family\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by habitat type\",\"in\":\"query\",\"name\":\"habitat\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by conservation status\",\"in\":\"query\",\"name\":\"status\",\"required\":false,\"schema\":{\"enum\":[\"LC\",\"NT\",\"VU\",\"EN\",\"CR\",\"EW\",\"EX\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"count\":{\"type\":\"integer\"},\"species\":{\"items\":{\"properties\":{\"characteristics\":{\"properties\":{\"behavior\":{\"type\":\"string\"},\"diet\":{\"type\":\"string\"},\"plumage\":{\"type\":\"string\"},\"size\":{\"type\":\"string\"}},\"type\":\"object\"},\"commonNames\":{\"properties\":{\"de\":{\"type\":\"string\"},\"en\":{\"type\":\"string\"},\"fr\":{\"type\":\"string\"},\"it\":{\"type\":\"string\"}},\"type\":\"object\"},\"conservationStatus\":{\"description\":\"Conservation status code\",\"type\":\"string\"},\"distribution\":{\"properties\":{\"breedingRange\":{\"type\":\"string\"},\"regions\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"winteringRange\":{\"type\":\"string\"}},\"type\":\"object\"},\"observationCount\":{\"description\":\"Number of recorded observations\",\"type\":\"integer\"},\"scientificName\":{\"description\":\"Scientific name\",\"type\":\"string\"},\"speciesId\":{\"description\":\"Unique species identifier\",\"type\":\"string\"},\"taxonomy\":{\"properties\":{\"class\":{\"type\":\"string\"},\"family\":{\"type\":\"string\"},\"genus\":{\"type\":\"string\"},\"kingdom\":{\"type\":\"string\"},\"order\":{\"type\":\"string\"},\"phylum\":{\"type\":\"string\"},\"species\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with species data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp of the error\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp of the error\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/species","segments":[{"lit":"api"},{"lit":"species"}],"select":{"exist":["family","habitat","status"]},"transform":{"req":"`reqdata`","res":"`body.species`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"species","name__orig":"species","Name":"Species","name_":"species","name-":"species","NAME":"SPECIES","index$":1}, {"active":true,"entity":"species","key$":"BasicSpeciesFlow","kind":"basic","name":"BasicSpeciesFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"species_ref01"}}],"index$":0}]}, 'Species')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let species_ref01_data = Object.values(setup.data.existing.species)[0] as any

    // LIST
    const species_ref01_ent = client.Species()
    const species_ref01_match: any = {}

    const species_ref01_list = (await species_ref01_ent.list(species_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/species/SpeciesTestData.json')

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
    ['species01','species02','species03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VOGELWARTE_SCHWEIZ_TEST_SPECIES_ENTID': idmap,
    'VOGELWARTE_SCHWEIZ_TEST_LIVE': 'FALSE',
    'VOGELWARTE_SCHWEIZ_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['VOGELWARTE_SCHWEIZ_TEST_SPECIES_ENTID']

  const live = 'TRUE' === env.VOGELWARTE_SCHWEIZ_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VOGELWARTE_SCHWEIZ_TEST_SPECIES_ENTID']
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
  
