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
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('BirdEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VOGELWARTE_SCHWEIZ_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VOGELWARTE_SCHWEIZ_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.VogelwarteSchweizSDK.test();
        const ent = testsdk.Bird();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VOGELWARTE_SCHWEIZ_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'bird.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "commonNameDe": { "a": true, "h": "Common Name De", "n": "commonNameDe", "r": false, "sh": "German common name", "t": "`$STRING`", "key$": "commonNameDe", "index$": 0 }, "commonNameEn": { "a": true, "h": "Common Name En", "n": "commonNameEn", "r": false, "sh": "English common name", "t": "`$STRING`", "key$": "commonNameEn", "index$": 1 }, "commonNameFr": { "a": true, "h": "Common Name Fr", "n": "commonNameFr", "r": false, "sh": "French common name", "t": "`$STRING`", "key$": "commonNameFr", "index$": 2 }, "commonNameIt": { "a": true, "h": "Common Name It", "n": "commonNameIt", "r": false, "sh": "Italian common name", "t": "`$STRING`", "key$": "commonNameIt", "index$": 3 }, "conservationStatus": { "a": true, "h": "Conservation Status", "n": "conservationStatus", "r": false, "sh": "IUCN conservation status", "t": "`$STRING`", "key$": "conservationStatus", "index$": 4 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Detailed description of the bird", "t": "`$STRING`", "key$": "description", "index$": 5 }, "family": { "a": true, "h": "Family", "n": "family", "r": false, "sh": "Taxonomic family", "t": "`$STRING`", "key$": "family", "index$": 6 }, "habitat": { "a": true, "h": "Habitat", "n": "habitat", "r": false, "sh": "Preferred habitats", "t": "`$ARRAY`", "key$": "habitat", "index$": 7 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the bird", "t": "`$STRING`", "key$": "id", "index$": 8 }, "imageUrl": { "a": true, "fo": "uri", "h": "Image Url", "n": "imageUrl", "r": false, "sh": "URL to bird image", "t": "`$STRING`", "key$": "imageUrl", "index$": 9 }, "length": { "a": true, "h": "Length", "n": "length", "r": false, "t": "`$OBJECT`", "key$": "length", "index$": 10 }, "order": { "a": true, "h": "Order", "n": "order", "r": false, "sh": "Taxonomic order", "t": "`$STRING`", "key$": "order", "index$": 11 }, "scientificName": { "a": true, "h": "Scientific Name", "n": "scientificName", "r": false, "sh": "Scientific name of the bird species", "t": "`$STRING`", "key$": "scientificName", "index$": 12 }, "weight": { "a": true, "h": "Weight", "n": "weight", "r": false, "t": "`$OBJECT`", "key$": "weight", "index$": 13 }, "wingspan": { "a": true, "h": "Wingspan", "n": "wingspan", "r": false, "t": "`$OBJECT`", "key$": "wingspan", "index$": 14 } }, "id": { "field": "id", "name": "id" }, "name": "bird", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/birds", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 100, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/api/birds", "q": { "exist": ["limit", "offset", "search"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "birds" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/birds/{birdId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "birdId", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/birds/{birdId}", "q": { "exist": ["id"] }, "r": { "param": { "birdId": "id" } }, "s": [{ "lit": "api" }, { "lit": "birds" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "bird", "name__orig": "bird", "Name": "Bird", "name_": "bird", "name-": "bird", "NAME": "BIRD", "index$": 0 }, { "active": true, "entity": "bird", "key$": "BasicBirdFlow", "kind": "basic", "name": "BasicBirdFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "bird_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "bird_ref01", "srcdatavar": "bird_ref01_data", "suffix": "_dt0" }, "m": { "id": "bird01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-bird_ref01" } }], "index$": 1 }] }, 'Bird', { "GET /api/birds": { "protocol": "http", "parameters": [{ "name": "limit", "in": "query", "description": "Maximum number of results to return", "required": false, "schema": { "type": "integer", "default": 100, "minimum": 1, "maximum": 1000 }, "index$": 0 }, { "name": "offset", "in": "query", "description": "Number of results to skip for pagination", "required": false, "schema": { "type": "integer", "default": 0, "minimum": 0 }, "index$": 1 }, { "name": "search", "in": "query", "description": "Search term to filter bird species by name", "required": false, "schema": { "type": "string" }, "index$": 2 }] }, "GET /api/birds/{birdId}": { "protocol": "http", "parameters": [{ "name": "birdId", "in": "path", "description": "Unique identifier of the bird species", "required": true, "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let bird_ref01_data = Object.values(setup.data.existing.bird)[0];
        // LIST
        const bird_ref01_ent = client.Bird();
        const bird_ref01_match = {};
        const bird_ref01_list = (await bird_ref01_ent.list(bird_ref01_match)).map((e) => e.data());
        // LOAD
        const bird_ref01_match_dt0 = {};
        bird_ref01_match_dt0.id = bird_ref01_data.id;
        const bird_ref01_data_dt0 = (await bird_ref01_ent.load(bird_ref01_match_dt0)).data();
        (0, node_assert_1.default)(bird_ref01_data_dt0.id === bird_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/bird/BirdTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.VogelwarteSchweizSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['bird01', 'bird02', 'bird03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'VOGELWARTE_SCHWEIZ_TEST_BIRD_ENTID': idmap,
        'VOGELWARTE_SCHWEIZ_TEST_LIVE': 'FALSE',
        'VOGELWARTE_SCHWEIZ_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['VOGELWARTE_SCHWEIZ_TEST_BIRD_ENTID'];
    const live = 'TRUE' === env.VOGELWARTE_SCHWEIZ_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['VOGELWARTE_SCHWEIZ_TEST_BIRD_ENTID'];
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
//# sourceMappingURL=BirdEntity.test.js.map