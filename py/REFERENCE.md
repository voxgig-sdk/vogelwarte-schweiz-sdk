# VogelwarteSchweiz Python SDK Reference

Complete API reference for the VogelwarteSchweiz Python SDK.


## VogelwarteSchweizSDK

### Constructor

```python
from vogelwarte-schweiz_sdk import VogelwarteSchweizSDK

client = VogelwarteSchweizSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `VogelwarteSchweizSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = VogelwarteSchweizSDK.test()
```


### Instance Methods

#### `Bird(data=None)`

Create a new `BirdEntity` instance. Pass `None` for no initial data.

#### `Species(data=None)`

Create a new `SpeciesEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## BirdEntity

```python
bird = client.Bird()
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.Bird().list({})
for bird in results:
    print(bird)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Bird().load({"id": "bird_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BirdEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SpeciesEntity

```python
species = client.Species()
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.Species().list({})
for species in results:
    print(species)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SpeciesEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = VogelwarteSchweizSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

