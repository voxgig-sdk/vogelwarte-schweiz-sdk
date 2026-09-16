package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "VogelwarteSchweiz",
			"slug": "vogelwarte-schweiz",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://www.vogelwarte.ch",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"bird": map[string]any{},
				"species": map[string]any{},
			},
		},
		"entity": map[string]any{
			"bird": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "commonNameDe",
						"short": "German common name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "commonNameEn",
						"short": "English common name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "commonNameFr",
						"short": "French common name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "commonNameIt",
						"short": "Italian common name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "conservationStatus",
						"short": "IUCN conservation status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Detailed description of the bird",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "family",
						"short": "Taxonomic family",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "habitat",
						"short": "Preferred habitats",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the bird",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "imageUrl",
						"short": "URL to bird image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "length",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "order",
						"short": "Taxonomic order",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "scientificName",
						"short": "Scientific name of the bird species",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "weight",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "wingspan",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "bird",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/birds",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "birds",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"offset",
										"search",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"api",
									"birds",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "bird_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/birds/{birdId}",
								"rename": map[string]any{
									"param": map[string]any{
										"birdId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "birds",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"birds",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"species": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "characteristics",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "commonNames",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "conservationStatus",
						"short": "Conservation status code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "distribution",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "observationCount",
						"short": "Number of recorded observations",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "scientificName",
						"short": "Scientific name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "speciesId",
						"short": "Unique species identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "taxonomy",
						"type": "`$OBJECT`",
					},
				},
				"name": "species",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "family",
											"orig": "family",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "habitat",
											"orig": "habitat",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/species",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "species",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"family",
										"habitat",
										"status",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.species`",
								},
								"parts": []any{
									"api",
									"species",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
