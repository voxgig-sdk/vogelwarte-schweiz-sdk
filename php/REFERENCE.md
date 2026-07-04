# VogelwarteSchweiz PHP SDK Reference

Complete API reference for the VogelwarteSchweiz PHP SDK.


## VogelwarteSchweizSDK

### Constructor

```php
require_once __DIR__ . '/vogelwarte-schweiz_sdk.php';

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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

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
$bird = $client->bird();
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

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->bird()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->bird()->load(["id" => "bird_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): BirdEntity`

Create a new `BirdEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## SpeciesEntity

```php
$species = $client->species();
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

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->species()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): SpeciesEntity`

Create a new `SpeciesEntity` instance with the same client and
options.

#### `getName(): string`

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

