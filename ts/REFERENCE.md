# VogelwarteSchweiz TypeScript SDK Reference

Complete API reference for the VogelwarteSchweiz TypeScript SDK.


## VogelwarteSchweizSDK

### Constructor

```ts
new VogelwarteSchweizSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `VogelwarteSchweizSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = VogelwarteSchweizSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `VogelwarteSchweizSDK` instance in test mode.


### Instance Methods

#### `Bird(data?: object)`

Create a new `Bird` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BirdEntity` instance.

#### `Species(data?: object)`

Create a new `Species` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SpeciesEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `VogelwarteSchweizSDK.test()`.

**Returns:** `VogelwarteSchweizSDK` instance in test mode.


---

## BirdEntity

```ts
const bird = client.bird
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.bird.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.bird.load({ id: 'bird_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BirdEntity` instance with the same client and
options.

#### `client()`

Return the parent `VogelwarteSchweizSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SpeciesEntity

```ts
const species = client.species
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.species.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SpeciesEntity` instance with the same client and
options.

#### `client()`

Return the parent `VogelwarteSchweizSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new VogelwarteSchweizSDK({
  feature: {
    test: { active: true },
  }
})
```

