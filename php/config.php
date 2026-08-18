<?php
declare(strict_types=1);

// VogelwarteSchweiz SDK configuration

class VogelwarteSchweizConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "VogelwarteSchweiz",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://www.vogelwarte.ch",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "bird" => [],
                    "species" => [],
                ],
            ],
            "entity" => [
        'bird' => [
          'fields' => [
            [
              'name' => 'commonNameDe',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'commonNameEn',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'commonNameFr',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'commonNameIt',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'conservationStatus',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'family',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'habitat',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'imageUrl',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'length',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'order',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'scientificName',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'weight',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'wingspan',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'bird',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'search',
                        'orig' => 'search',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/birds',
                  'parts' => [
                    'api',
                    'birds',
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'offset',
                      'search',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'bird_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/birds/{birdId}',
                  'parts' => [
                    'api',
                    'birds',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'birdId' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'species' => [
          'fields' => [
            [
              'name' => 'characteristics',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'commonNames',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'conservationStatus',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'distribution',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'observationCount',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'scientificName',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'speciesId',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'taxonomy',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'species',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'family',
                        'orig' => 'family',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'habitat',
                        'orig' => 'habitat',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/species',
                  'parts' => [
                    'api',
                    'species',
                  ],
                  'select' => [
                    'exist' => [
                      'family',
                      'habitat',
                      'status',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.species`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return VogelwarteSchweizFeatures::make_feature($name);
    }
}
