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
						"title": "Common Name De",
						"type": "`$STRING`",
						"short": "German common name",
					},
					map[string]any{
						"name": "commonNameEn",
						"title": "Common Name En",
						"type": "`$STRING`",
						"short": "English common name",
					},
					map[string]any{
						"name": "commonNameFr",
						"title": "Common Name Fr",
						"type": "`$STRING`",
						"short": "French common name",
					},
					map[string]any{
						"name": "commonNameIt",
						"title": "Common Name It",
						"type": "`$STRING`",
						"short": "Italian common name",
					},
					map[string]any{
						"name": "conservationStatus",
						"title": "Conservation Status",
						"type": "`$STRING`",
						"short": "IUCN conservation status",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Detailed description of the bird",
					},
					map[string]any{
						"name": "family",
						"title": "Family",
						"type": "`$STRING`",
						"short": "Taxonomic family",
					},
					map[string]any{
						"name": "habitat",
						"title": "Habitat",
						"type": "`$ARRAY`",
						"short": "Preferred habitats",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the bird",
					},
					map[string]any{
						"name": "imageUrl",
						"title": "Image Url",
						"type": "`$STRING`",
						"short": "URL to bird image",
						"format": "uri",
					},
					map[string]any{
						"name": "length",
						"title": "Length",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "order",
						"title": "Order",
						"type": "`$STRING`",
						"short": "Taxonomic order",
					},
					map[string]any{
						"name": "scientificName",
						"title": "Scientific Name",
						"type": "`$STRING`",
						"short": "Scientific name of the bird species",
					},
					map[string]any{
						"name": "weight",
						"title": "Weight",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "wingspan",
						"title": "Wingspan",
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
								"parts": []any{
									"api",
									"birds",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"offset",
										"search",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/birds/{birdId}",
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
								"parts": []any{
									"api",
									"birds",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"birdId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "birdId",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Characteristics",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "commonNames",
						"title": "Common Names",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "conservationStatus",
						"title": "Conservation Status",
						"type": "`$STRING`",
						"short": "Conservation status code",
					},
					map[string]any{
						"name": "distribution",
						"title": "Distribution",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "observationCount",
						"title": "Observation Count",
						"type": "`$INTEGER`",
						"short": "Number of recorded observations",
					},
					map[string]any{
						"name": "scientificName",
						"title": "Scientific Name",
						"type": "`$STRING`",
						"short": "Scientific name",
					},
					map[string]any{
						"name": "speciesId",
						"title": "Species Id",
						"type": "`$STRING`",
						"short": "Unique species identifier",
					},
					map[string]any{
						"name": "taxonomy",
						"title": "Taxonomy",
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
								"parts": []any{
									"api",
									"species",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.species`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "family",
											"orig": "family",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "habitat",
											"orig": "habitat",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"family",
										"habitat",
										"status",
									},
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
