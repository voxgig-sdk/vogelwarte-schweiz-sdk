# VogelwarteSchweiz SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "VogelwarteSchweiz",
            "slug": "vogelwarte-schweiz",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://www.vogelwarte.ch",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "bird": {},
                "species": {},
            },
        },
        "entity": {
      "bird": {
        "fields": [
          {
            "name": "commonNameDe",
            "short": "German common name",
            "type": "`$STRING`",
          },
          {
            "name": "commonNameEn",
            "short": "English common name",
            "type": "`$STRING`",
          },
          {
            "name": "commonNameFr",
            "short": "French common name",
            "type": "`$STRING`",
          },
          {
            "name": "commonNameIt",
            "short": "Italian common name",
            "type": "`$STRING`",
          },
          {
            "name": "conservationStatus",
            "short": "IUCN conservation status",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "short": "Detailed description of the bird",
            "type": "`$STRING`",
          },
          {
            "name": "family",
            "short": "Taxonomic family",
            "type": "`$STRING`",
          },
          {
            "name": "habitat",
            "short": "Preferred habitats",
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the bird",
            "type": "`$STRING`",
          },
          {
            "name": "imageUrl",
            "short": "URL to bird image",
            "type": "`$STRING`",
          },
          {
            "name": "length",
            "type": "`$OBJECT`",
          },
          {
            "name": "order",
            "short": "Taxonomic order",
            "type": "`$STRING`",
          },
          {
            "name": "scientificName",
            "short": "Scientific name of the bird species",
            "type": "`$STRING`",
          },
          {
            "name": "weight",
            "type": "`$OBJECT`",
          },
          {
            "name": "wingspan",
            "type": "`$OBJECT`",
          },
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
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "search",
                      "orig": "search",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/birds",
                "parts": [
                  "api",
                  "birds",
                ],
                "select": {
                  "exist": [
                    "limit",
                    "offset",
                    "search",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/birds/{birdId}",
                "parts": [
                  "api",
                  "birds",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "birdId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "species": {
        "fields": [
          {
            "name": "characteristics",
            "type": "`$OBJECT`",
          },
          {
            "name": "commonNames",
            "type": "`$OBJECT`",
          },
          {
            "name": "conservationStatus",
            "short": "Conservation status code",
            "type": "`$STRING`",
          },
          {
            "name": "distribution",
            "type": "`$OBJECT`",
          },
          {
            "name": "observationCount",
            "short": "Number of recorded observations",
            "type": "`$INTEGER`",
          },
          {
            "name": "scientificName",
            "short": "Scientific name",
            "type": "`$STRING`",
          },
          {
            "name": "speciesId",
            "short": "Unique species identifier",
            "type": "`$STRING`",
          },
          {
            "name": "taxonomy",
            "type": "`$OBJECT`",
          },
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "habitat",
                      "orig": "habitat",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/species",
                "parts": [
                  "api",
                  "species",
                ],
                "select": {
                  "exist": [
                    "family",
                    "habitat",
                    "status",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.species`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
