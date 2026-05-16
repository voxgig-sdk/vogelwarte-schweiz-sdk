# VogelwarteSchweiz Golang SDK Reference

Complete API reference for the VogelwarteSchweiz Golang SDK.


## VogelwarteSchweizSDK

### Constructor

```go
func NewVogelwarteSchweizSDK(options map[string]any) *VogelwarteSchweizSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TestSDK(testopts, sdkopts map[string]any) *VogelwarteSchweizSDK`

Create a test client with mock features active. Both arguments may be `nil`.

```go
client := sdk.TestSDK(nil, nil)
```


### Instance Methods

#### `Bird(data map[string]any) VogelwarteSchweizEntity`

Create a new `Bird` entity instance. Pass `nil` for no initial data.

#### `Species(data map[string]any) VogelwarteSchweizEntity`

Create a new `Species` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## BirdEntity

```go
bird := client.Bird(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `common_name_de` | ``$STRING`` | No |  |
| `common_name_en` | ``$STRING`` | No |  |
| `common_name_fr` | ``$STRING`` | No |  |
| `common_name_it` | ``$STRING`` | No |  |
| `conservation_status` | ``$STRING`` | No |  |
| `description` | ``$STRING`` | No |  |
| `family` | ``$STRING`` | No |  |
| `habitat` | ``$ARRAY`` | No |  |
| `id` | ``$STRING`` | No |  |
| `image_url` | ``$STRING`` | No |  |
| `length` | ``$OBJECT`` | No |  |
| `order` | ``$STRING`` | No |  |
| `scientific_name` | ``$STRING`` | No |  |
| `weight` | ``$OBJECT`` | No |  |
| `wingspan` | ``$OBJECT`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Bird(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Bird(nil).Load(map[string]any{"id": "bird_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BirdEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SpeciesEntity

```go
species := client.Species(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `characteristic` | ``$OBJECT`` | No |  |
| `common_name` | ``$OBJECT`` | No |  |
| `conservation_status` | ``$STRING`` | No |  |
| `distribution` | ``$OBJECT`` | No |  |
| `observation_count` | ``$INTEGER`` | No |  |
| `scientific_name` | ``$STRING`` | No |  |
| `species_id` | ``$STRING`` | No |  |
| `taxonomy` | ``$OBJECT`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Species(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SpeciesEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewVogelwarteSchweizSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

