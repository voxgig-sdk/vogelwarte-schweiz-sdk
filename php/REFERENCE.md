# VogelwarteSchweiz PHP SDK Reference

Complete API reference for the VogelwarteSchweiz PHP SDK.


## VogelwarteSchweizSDK

### Constructor

```php
require_once __DIR__ . '/vogelwarteschweiz_sdk.php';

$client = new VogelwarteSchweizSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `VogelwarteSchweizSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = VogelwarteSchweizSDK::test();
```


### Instance Methods

#### `Bird($data = null)`

Create a new `BirdEntity` instance. Pass `null` for no initial data.

#### `Species($data = null)`

Create a new `SpeciesEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): VogelwarteSchweizUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## BirdEntity

```php
$bird = $client->Bird();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `common_name_de` | `string` | No |  |
| `common_name_en` | `string` | No |  |
| `common_name_fr` | `string` | No |  |
| `common_name_it` | `string` | No |  |
| `conservation_status` | `string` | No |  |
| `description` | `string` | No |  |
| `family` | `string` | No |  |
| `habitat` | `array` | No |  |
| `id` | `string` | No |  |
| `image_url` | `string` | No |  |
| `length` | `array` | No |  |
| `order` | `string` | No |  |
| `scientific_name` | `string` | No |  |
| `weight` | `array` | No |  |
| `wingspan` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Bird()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Bird()->load(["id" => "bird_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BirdEntity`

Create a new `BirdEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SpeciesEntity

```php
$species = $client->Species();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `characteristic` | `array` | No |  |
| `common_name` | `array` | No |  |
| `conservation_status` | `string` | No |  |
| `distribution` | `array` | No |  |
| `observation_count` | `int` | No |  |
| `scientific_name` | `string` | No |  |
| `species_id` | `string` | No |  |
| `taxonomy` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Species()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SpeciesEntity`

Create a new `SpeciesEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new VogelwarteSchweizSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

