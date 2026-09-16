"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SpeciesEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VOGELWARTE_SCHWEIZ_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VOGELWARTE_SCHWEIZ_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.VogelwarteSchweizSDK.test();
        const ent = testsdk.Species();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VOGELWARTE_SCHWEIZ_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'species.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "characteristics", "req": false, "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "commonNames", "req": false, "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "conservationStatus", "req": false, "short": "Conservation status code", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "distribution", "req": false, "type": "`$OBJECT`", "index$": 3 }, { "active": true, "name": "observationCount", "req": false, "short": "Number of recorded observations", "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "scientificName", "req": false, "short": "Scientific name", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "speciesId", "req": false, "short": "Unique species identifier", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "taxonomy", "req": false, "type": "`$OBJECT`", "index$": 7 }], "name": "species", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "family", "orig": "family", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "habitat", "orig": "habitat", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "status", "orig": "status", "reqd": false, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "GET /api/species", "json": "{\"operationId\":\"getSpecies\",\"parameters\":[{\"description\":\"Filter by bird family\",\"in\":\"query\",\"name\":\"family\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by habitat type\",\"in\":\"query\",\"name\":\"habitat\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by conservation status\",\"in\":\"query\",\"name\":\"status\",\"required\":false,\"schema\":{\"enum\":[\"LC\",\"NT\",\"VU\",\"EN\",\"CR\",\"EW\",\"EX\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"count\":{\"type\":\"integer\"},\"species\":{\"items\":{\"properties\":{\"characteristics\":{\"properties\":{\"behavior\":{\"type\":\"string\"},\"diet\":{\"type\":\"string\"},\"plumage\":{\"type\":\"string\"},\"size\":{\"type\":\"string\"}},\"type\":\"object\"},\"commonNames\":{\"properties\":{\"de\":{\"type\":\"string\"},\"en\":{\"type\":\"string\"},\"fr\":{\"type\":\"string\"},\"it\":{\"type\":\"string\"}},\"type\":\"object\"},\"conservationStatus\":{\"description\":\"Conservation status code\",\"type\":\"string\"},\"distribution\":{\"properties\":{\"breedingRange\":{\"type\":\"string\"},\"regions\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"winteringRange\":{\"type\":\"string\"}},\"type\":\"object\"},\"observationCount\":{\"description\":\"Number of recorded observations\",\"type\":\"integer\"},\"scientificName\":{\"description\":\"Scientific name\",\"type\":\"string\"},\"speciesId\":{\"description\":\"Unique species identifier\",\"type\":\"string\"},\"taxonomy\":{\"properties\":{\"class\":{\"type\":\"string\"},\"family\":{\"type\":\"string\"},\"genus\":{\"type\":\"string\"},\"kingdom\":{\"type\":\"string\"},\"order\":{\"type\":\"string\"},\"phylum\":{\"type\":\"string\"},\"species\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with species data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp of the error\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp of the error\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/species", "segments": [{ "lit": "api" }, { "lit": "species" }], "select": { "exist": ["family", "habitat", "status"] }, "transform": { "req": "`reqdata`", "res": "`body.species`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "species", "name__orig": "species", "Name": "Species", "name_": "species", "name-": "species", "NAME": "SPECIES", "index$": 1 }, { "active": true, "entity": "species", "key$": "BasicSpeciesFlow", "kind": "basic", "name": "BasicSpeciesFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "species_ref01" } }], "index$": 0 }] }, 'Species');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let species_ref01_data = Object.values(setup.data.existing.species)[0];
        // LIST
        const species_ref01_ent = client.Species();
        const species_ref01_match = {};
        const species_ref01_list = (await species_ref01_ent.list(species_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/species/SpeciesTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.VogelwarteSchweizSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['species01', 'species02', 'species03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VOGELWARTE_SCHWEIZ_TEST_SPECIES_ENTID': idmap,
        'VOGELWARTE_SCHWEIZ_TEST_LIVE': 'FALSE',
        'VOGELWARTE_SCHWEIZ_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['VOGELWARTE_SCHWEIZ_TEST_SPECIES_ENTID'];
    const live = 'TRUE' === env.VOGELWARTE_SCHWEIZ_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VOGELWARTE_SCHWEIZ_TEST_SPECIES_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.VogelwarteSchweizSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=SpeciesEntity.test.js.map