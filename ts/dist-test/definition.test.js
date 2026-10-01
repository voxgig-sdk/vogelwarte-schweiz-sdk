"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "bird",
        "accessor": "Bird",
        "op": "list",
        "method": "GET",
        "path": "/api/birds",
        "args": [],
        "select": {
            "limit": "v1",
            "offset": "v1",
            "search": "v1"
        },
        "headers": [],
        "query": [
            "limit",
            "offset",
            "search"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "data": [
                {
                    "commonNameDe": "x",
                    "commonNameEn": "x",
                    "commonNameFr": "x",
                    "commonNameIt": "x",
                    "conservationStatus": "x",
                    "description": "x",
                    "family": "x",
                    "habitat": [
                        "x"
                    ],
                    "id": "x",
                    "imageUrl": "x",
                    "length": {
                        "max": 1,
                        "min": 1
                    },
                    "order": "x",
                    "scientificName": "x",
                    "weight": {
                        "max": 1,
                        "min": 1
                    },
                    "wingspan": {
                        "max": 1,
                        "min": 1
                    }
                }
            ],
            "total": 1,
            "limit": 1,
            "offset": 1
        },
        "idField": "id"
    },
    {
        "entity": "bird",
        "accessor": "Bird",
        "op": "load",
        "method": "GET",
        "path": "/api/birds/{birdId}",
        "args": [
            {
                "name": "id",
                "wire": "birdId",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "id": "x",
            "scientificName": "x",
            "commonNameDe": "x",
            "commonNameFr": "x",
            "commonNameIt": "x",
            "commonNameEn": "x",
            "family": "x",
            "order": "x",
            "conservationStatus": "x",
            "habitat": [
                "x"
            ],
            "length": {
                "max": 1,
                "min": 1
            },
            "wingspan": {
                "max": 1,
                "min": 1
            },
            "weight": {
                "max": 1,
                "min": 1
            },
            "imageUrl": "x",
            "description": "x"
        },
        "idField": "id"
    },
    {
        "entity": "species",
        "accessor": "Species",
        "op": "list",
        "method": "GET",
        "path": "/api/species",
        "args": [],
        "select": {
            "family": "v1",
            "habitat": "v1",
            "status": "v1"
        },
        "headers": [],
        "query": [
            "family",
            "habitat",
            "status"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "species": [
                {
                    "characteristics": {
                        "behavior": "x",
                        "diet": "x",
                        "plumage": "x",
                        "size": "x"
                    },
                    "commonNames": {
                        "de": "x",
                        "en": "x",
                        "fr": "x",
                        "it": "x"
                    },
                    "conservationStatus": "x",
                    "distribution": {
                        "breedingRange": "x",
                        "regions": [
                            "x"
                        ],
                        "winteringRange": "x"
                    },
                    "observationCount": 1,
                    "scientificName": "x",
                    "speciesId": "x",
                    "taxonomy": {
                        "class": "x",
                        "family": "x",
                        "genus": "x",
                        "kingdom": "x",
                        "order": "x",
                        "phylum": "x",
                        "species": "x"
                    }
                }
            ],
            "count": 1
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map