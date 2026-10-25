import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "bird",
    "accessor": "Bird",
    "op": "list",
    "method": "GET",
    "path": "/api/birds",
    "args": [],
    "select": {
      "limit": 100,
      "offset": 0,
      "search": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "search"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "search",
        "wire": "search"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "data": [
        {
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
            "min": 1,
            "max": 1
          },
          "wingspan": {
            "min": 1,
            "max": 1
          },
          "weight": {
            "min": 1,
            "max": 1
          },
          "imageUrl": "x",
          "description": "x"
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
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
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
        "min": 1,
        "max": 1
      },
      "wingspan": {
        "min": 1,
        "max": 1
      },
      "weight": {
        "min": 1,
        "max": 1
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
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "family",
      "habitat",
      "status"
    ],
    "queryArgs": [
      {
        "name": "family",
        "wire": "family"
      },
      {
        "name": "habitat",
        "wire": "habitat"
      },
      {
        "name": "status",
        "wire": "status"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "species": [
        {
          "speciesId": "x",
          "scientificName": "x",
          "commonNames": {
            "de": "x",
            "fr": "x",
            "it": "x",
            "en": "x"
          },
          "taxonomy": {
            "kingdom": "x",
            "phylum": "x",
            "class": "x",
            "order": "x",
            "family": "x",
            "genus": "x",
            "species": "x"
          },
          "conservationStatus": "x",
          "characteristics": {
            "size": "x",
            "plumage": "x",
            "behavior": "x",
            "diet": "x"
          },
          "distribution": {
            "regions": [
              "x"
            ],
            "breedingRange": "x",
            "winteringRange": "x"
          },
          "observationCount": 1
        }
      ],
      "count": 1
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
