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
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "commonNameEn",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "commonNameFr",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "commonNameIt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "conservationStatus",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "family",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "habitat",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imageUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "length",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "order",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "scientificName",
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
								"parts": []any{
									"api",
									"birds",
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
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "distribution",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "observationCount",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "scientificName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "speciesId",
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
								"parts": []any{
									"api",
									"species",
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
