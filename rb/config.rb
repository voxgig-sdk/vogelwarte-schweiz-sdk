# VogelwarteSchweiz SDK configuration

module VogelwarteSchweizConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "VogelwarteSchweiz",
        "slug" => "vogelwarte-schweiz",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://www.vogelwarte.ch",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "bird" => {},
          "species" => {},
        },
      },
      "entity" => {
        "bird" => {
          "fields" => [
            {
              "name" => "commonNameDe",
              "short" => "German common name",
              "type" => "`$STRING`",
            },
            {
              "name" => "commonNameEn",
              "short" => "English common name",
              "type" => "`$STRING`",
            },
            {
              "name" => "commonNameFr",
              "short" => "French common name",
              "type" => "`$STRING`",
            },
            {
              "name" => "commonNameIt",
              "short" => "Italian common name",
              "type" => "`$STRING`",
            },
            {
              "name" => "conservationStatus",
              "short" => "IUCN conservation status",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "short" => "Detailed description of the bird",
              "type" => "`$STRING`",
            },
            {
              "name" => "family",
              "short" => "Taxonomic family",
              "type" => "`$STRING`",
            },
            {
              "name" => "habitat",
              "short" => "Preferred habitats",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the bird",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "imageUrl",
              "short" => "URL to bird image",
              "type" => "`$STRING`",
            },
            {
              "name" => "length",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "order",
              "short" => "Taxonomic order",
              "type" => "`$STRING`",
            },
            {
              "name" => "scientificName",
              "short" => "Scientific name of the bird species",
              "type" => "`$STRING`",
            },
            {
              "name" => "weight",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "wingspan",
              "type" => "`$OBJECT`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "bird",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => 100,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 0,
                        "kind" => "query",
                        "name" => "offset",
                        "orig" => "offset",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "search",
                        "orig" => "search",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/birds",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "birds",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "limit",
                      "offset",
                      "search",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "api",
                    "birds",
                  ],
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "bird_id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/birds/{birdId}",
                  "rename" => {
                    "param" => {
                      "birdId" => "id",
                    },
                  },
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "birds",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "api",
                    "birds",
                    "{id}",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "species" => {
          "fields" => [
            {
              "name" => "characteristics",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "commonNames",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "conservationStatus",
              "short" => "Conservation status code",
              "type" => "`$STRING`",
            },
            {
              "name" => "distribution",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "observationCount",
              "short" => "Number of recorded observations",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "scientificName",
              "short" => "Scientific name",
              "type" => "`$STRING`",
            },
            {
              "name" => "speciesId",
              "short" => "Unique species identifier",
              "type" => "`$STRING`",
            },
            {
              "name" => "taxonomy",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "species",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "family",
                        "orig" => "family",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "habitat",
                        "orig" => "habitat",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "status",
                        "orig" => "status",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/species",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "species",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "family",
                      "habitat",
                      "status",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.species`",
                  },
                  "parts" => [
                    "api",
                    "species",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    VogelwarteSchweizFeatures.make_feature(name)
  end
end
