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
(0, node_test_1.describe)('SpeciesEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when VOGELWARTE_SCHWEIZ_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('VOGELWARTE_SCHWEIZ_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.VogelwarteSchweizSDK.test();
        const ent = testsdk.Species();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('species hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.VogelwarteSchweizSDK.test(offline).Species().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.VogelwarteSchweizSDK.test(offline).Species()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.VogelwarteSchweizSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Species().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.VogelwarteSchweizSDK.test().Species().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.VogelwarteSchweizSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Species().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Species().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.VogelwarteSchweizSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Species().list({ "family": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.VOGELWARTE_SCHWEIZ_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'species.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "characteristics": { "a": true, "h": "Characteristics", "n": "characteristics", "r": false, "t": "`$OBJECT`", "key$": "characteristics", "index$": 0 }, "commonNames": { "a": true, "h": "Common Names", "n": "commonNames", "r": false, "t": "`$OBJECT`", "key$": "commonNames", "index$": 1 }, "conservationStatus": { "a": true, "h": "Conservation Status", "n": "conservationStatus", "r": false, "sh": "Conservation status code", "t": "`$STRING`", "key$": "conservationStatus", "index$": 2 }, "distribution": { "a": true, "h": "Distribution", "n": "distribution", "r": false, "t": "`$OBJECT`", "key$": "distribution", "index$": 3 }, "observationCount": { "a": true, "h": "Observation Count", "n": "observationCount", "r": false, "sh": "Number of recorded observations", "t": "`$INTEGER`", "key$": "observationCount", "index$": 4 }, "scientificName": { "a": true, "h": "Scientific Name", "n": "scientificName", "r": false, "sh": "Scientific name", "t": "`$STRING`", "key$": "scientificName", "index$": 5 }, "speciesId": { "a": true, "h": "Species Id", "n": "speciesId", "r": false, "sh": "Unique species identifier", "t": "`$STRING`", "key$": "speciesId", "index$": 6 }, "taxonomy": { "a": true, "h": "Taxonomy", "n": "taxonomy", "r": false, "t": "`$OBJECT`", "key$": "taxonomy", "index$": 7 } }, "name": "species", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/species", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "family", "or": "family", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "habitat", "or": "habitat", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/api/species", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "species" }], "t": { "req": "`reqdata`", "res": "`body.species`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "species", "name__orig": "species", "Name": "Species", "name_": "species", "name-": "species", "NAME": "SPECIES", "index$": 1 }, { "active": true, "entity": "species", "key$": "BasicSpeciesFlow", "kind": "basic", "name": "BasicSpeciesFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "species_ref01" } }], "index$": 0 }] }, 'Species', { "GET /api/species": { "protocol": "http", "parameters": [{ "name": "family", "in": "query", "description": "Filter by bird family", "required": false, "schema": { "type": "string" }, "index$": 0 }, { "name": "habitat", "in": "query", "description": "Filter by habitat type", "required": false, "schema": { "type": "string" }, "index$": 1 }, { "name": "status", "in": "query", "description": "Filter by conservation status", "required": false, "schema": { "type": "string", "enum": ["LC", "NT", "VU", "EN", "CR", "EW", "EX"] }, "index$": 2 }] } }, { strict: LIVE_STRICT, t });
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
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
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