
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'VogelwarteSchweiz',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://www.vogelwarte.ch",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      bird: {
      },

      species: {
      },

    }
  }


  entity = {
    "bird": {
      "fields": [
        {
          "name": "commonNameDe",
          "type": "`$STRING`"
        },
        {
          "name": "commonNameEn",
          "type": "`$STRING`"
        },
        {
          "name": "commonNameFr",
          "type": "`$STRING`"
        },
        {
          "name": "commonNameIt",
          "type": "`$STRING`"
        },
        {
          "name": "conservationStatus",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "type": "`$STRING`"
        },
        {
          "name": "family",
          "type": "`$STRING`"
        },
        {
          "name": "habitat",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "imageUrl",
          "type": "`$STRING`"
        },
        {
          "name": "length",
          "type": "`$OBJECT`"
        },
        {
          "name": "order",
          "type": "`$STRING`"
        },
        {
          "name": "scientificName",
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
              "parts": [
                "api",
                "birds"
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
              }
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
              "parts": [
                "api",
                "birds",
                "{id}"
              ],
              "rename": {
                "param": {
                  "birdId": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
          "type": "`$STRING`"
        },
        {
          "name": "distribution",
          "type": "`$OBJECT`"
        },
        {
          "name": "observationCount",
          "type": "`$INTEGER`"
        },
        {
          "name": "scientificName",
          "type": "`$STRING`"
        },
        {
          "name": "speciesId",
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
              "parts": [
                "api",
                "species"
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
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

