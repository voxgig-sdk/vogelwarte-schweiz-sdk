"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'VogelwarteSchweiz',
        slug: "vogelwarte-schweiz",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://www.vogelwarte.ch",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            bird: {},
            species: {},
        }
    };
    entity = {
        "bird": {
            "fields": [
                {
                    "name": "commonNameDe",
                    "short": "German common name",
                    "type": "`$STRING`"
                },
                {
                    "name": "commonNameEn",
                    "short": "English common name",
                    "type": "`$STRING`"
                },
                {
                    "name": "commonNameFr",
                    "short": "French common name",
                    "type": "`$STRING`"
                },
                {
                    "name": "commonNameIt",
                    "short": "Italian common name",
                    "type": "`$STRING`"
                },
                {
                    "name": "conservationStatus",
                    "short": "IUCN conservation status",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "short": "Detailed description of the bird",
                    "type": "`$STRING`"
                },
                {
                    "name": "family",
                    "short": "Taxonomic family",
                    "type": "`$STRING`"
                },
                {
                    "name": "habitat",
                    "short": "Preferred habitats",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier for the bird",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "imageUrl",
                    "short": "URL to bird image",
                    "type": "`$STRING`"
                },
                {
                    "name": "length",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "order",
                    "short": "Taxonomic order",
                    "type": "`$STRING`"
                },
                {
                    "name": "scientificName",
                    "short": "Scientific name of the bird species",
                    "type": "`$STRING`"
                },
                {
                    "name": "weight",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "wingspan",
                    "type": "`$OBJECT`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "bird",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": 100,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 0,
                                        "kind": "query",
                                        "name": "offset",
                                        "orig": "offset",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "search",
                                        "orig": "search",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/birds",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "birds"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "limit",
                                    "offset",
                                    "search"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "api",
                                "birds"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "bird_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/birds/{birdId}",
                            "rename": {
                                "param": {
                                    "birdId": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "birds"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "birds",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "species": {
            "fields": [
                {
                    "name": "characteristics",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "commonNames",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "conservationStatus",
                    "short": "Conservation status code",
                    "type": "`$STRING`"
                },
                {
                    "name": "distribution",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "observationCount",
                    "short": "Number of recorded observations",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "scientificName",
                    "short": "Scientific name",
                    "type": "`$STRING`"
                },
                {
                    "name": "speciesId",
                    "short": "Unique species identifier",
                    "type": "`$STRING`"
                },
                {
                    "name": "taxonomy",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "species",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "family",
                                        "orig": "family",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "habitat",
                                        "orig": "habitat",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "status",
                                        "orig": "status",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/species",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "species"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "family",
                                    "habitat",
                                    "status"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.species`"
                            },
                            "parts": [
                                "api",
                                "species"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map