# VogelwarteSchweiz SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


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
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "title": "Common Name De",
            "type": "`$STRING`",
            "short": "German common name",
          },
          {
            "name": "commonNameEn",
            "title": "Common Name En",
            "type": "`$STRING`",
            "short": "English common name",
          },
          {
            "name": "commonNameFr",
            "title": "Common Name Fr",
            "type": "`$STRING`",
            "short": "French common name",
          },
          {
            "name": "commonNameIt",
            "title": "Common Name It",
            "type": "`$STRING`",
            "short": "Italian common name",
          },
          {
            "name": "conservationStatus",
            "title": "Conservation Status",
            "type": "`$STRING`",
            "short": "IUCN conservation status",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Detailed description of the bird",
          },
          {
            "name": "family",
            "title": "Family",
            "type": "`$STRING`",
            "short": "Taxonomic family",
          },
          {
            "name": "habitat",
            "title": "Habitat",
            "type": "`$ARRAY`",
            "short": "Preferred habitats",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the bird",
          },
          {
            "name": "imageUrl",
            "title": "Image Url",
            "type": "`$STRING`",
            "short": "URL to bird image",
            "format": "uri",
          },
          {
            "name": "length",
            "title": "Length",
            "type": "`$OBJECT`",
          },
          {
            "name": "order",
            "title": "Order",
            "type": "`$STRING`",
            "short": "Taxonomic order",
          },
          {
            "name": "scientificName",
            "title": "Scientific Name",
            "type": "`$STRING`",
            "short": "Scientific name of the bird species",
          },
          {
            "name": "weight",
            "title": "Weight",
            "type": "`$OBJECT`",
          },
          {
            "name": "wingspan",
            "title": "Wingspan",
            "type": "`$OBJECT`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "bird",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/birds",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "birds",
                  },
                ],
                "parts": [
                  "api",
                  "birds",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 100,
                    },
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "search",
                      "orig": "search",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "offset",
                    "search",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/birds/{birdId}",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "birds",
                  },
                  {
                    "var": "id",
                  },
                ],
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "birdId",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
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
            "title": "Characteristics",
            "type": "`$OBJECT`",
          },
          {
            "name": "commonNames",
            "title": "Common Names",
            "type": "`$OBJECT`",
          },
          {
            "name": "conservationStatus",
            "title": "Conservation Status",
            "type": "`$STRING`",
            "short": "Conservation status code",
          },
          {
            "name": "distribution",
            "title": "Distribution",
            "type": "`$OBJECT`",
          },
          {
            "name": "observationCount",
            "title": "Observation Count",
            "type": "`$INTEGER`",
            "short": "Number of recorded observations",
          },
          {
            "name": "scientificName",
            "title": "Scientific Name",
            "type": "`$STRING`",
            "short": "Scientific name",
          },
          {
            "name": "speciesId",
            "title": "Species Id",
            "type": "`$STRING`",
            "short": "Unique species identifier",
          },
          {
            "name": "taxonomy",
            "title": "Taxonomy",
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
                "kind": "http",
                "method": "GET",
                "orig": "/api/species",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "species",
                  },
                ],
                "parts": [
                  "api",
                  "species",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.species`",
                },
                "args": {
                  "query": [
                    {
                      "name": "family",
                      "orig": "family",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "habitat",
                      "orig": "habitat",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "family",
                    "habitat",
                    "status",
                  ],
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
