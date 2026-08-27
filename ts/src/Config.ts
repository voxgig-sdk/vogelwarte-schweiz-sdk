
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

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'VogelwarteSchweiz',
        slug: "vogelwarte-schweiz",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
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

