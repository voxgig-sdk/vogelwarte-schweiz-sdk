# VogelwarteSchweiz SDK

Browse Switzerland's national bird database with daily featured species and detailed records by ID and language

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Vogelwarte Schweiz

[Vogelwarte Schweiz](https://www.vogelwarte.ch) exposes the bird database maintained by the [Schweizerische Vogelwarte Sempach](https://www.vogelwarte.ch) — the Swiss Ornithological Institute, an independent foundation for ornithology and bird conservation based in Sempach. The endpoints powering the institute's public species pages are not officially documented; this SDK targets the reverse-engineered routes catalogued on [freepublicapis.com](https://freepublicapis.com/vogelwarte-schweiz).

What you can pull from the API:

- A random "bird of the day" entry
- A full bird record by numeric ID and language code (for example `700_de` for German)
- The complete list of birds in the database, covering the 400+ species recorded in Switzerland

No authentication or rate limits are advertised, but because the endpoints are undocumented they may change without notice. CORS is disabled on the upstream server, so requests must be made from a server or other non-browser client.

## Try it

**TypeScript**
```bash
npm install vogelwarte-schweiz
```

**Python**
```bash
pip install vogelwarte-schweiz-sdk
```

**PHP**
```bash
composer require voxgig/vogelwarte-schweiz-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/vogelwarte-schweiz-sdk/go
```

**Ruby**
```bash
gem install vogelwarte-schweiz-sdk
```

**Lua**
```bash
luarocks install vogelwarte-schweiz-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { VogelwarteSchweizSDK } from 'vogelwarte-schweiz'

const client = new VogelwarteSchweizSDK({})

// List all birds
const birds = await client.Bird().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o vogelwarte-schweiz-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "vogelwarte-schweiz": {
      "command": "/abs/path/to/vogelwarte-schweiz-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Bird** | An individual bird record from the Vogelwarte database, addressable by numeric ID and language (e.g. `700_de`), plus a "bird of the day" endpoint. | `/api/birds` |
| **Species** | The catalogue of bird species occurring in Switzerland, with a listing endpoint that enumerates every entry in the database. | `/api/species` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from vogelwarteschweiz_sdk import VogelwarteSchweizSDK

client = VogelwarteSchweizSDK({})

# List all birds
birds, err = client.Bird(None).list(None, None)

# Load a specific bird
bird, err = client.Bird(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'vogelwarteschweiz_sdk.php';

$client = new VogelwarteSchweizSDK([]);

// List all birds
[$birds, $err] = $client->Bird(null)->list(null, null);

// Load a specific bird
[$bird, $err] = $client->Bird(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/vogelwarte-schweiz-sdk/go"

client := sdk.NewVogelwarteSchweizSDK(map[string]any{})

// List all birds
birds, err := client.Bird(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "VogelwarteSchweiz_sdk"

client = VogelwarteSchweizSDK.new({})

# List all birds
birds, err = client.Bird(nil).list(nil, nil)

# Load a specific bird
bird, err = client.Bird(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("vogelwarte-schweiz_sdk")

local client = sdk.new({})

-- List all birds
local birds, err = client:Bird(nil):list(nil, nil)

-- Load a specific bird
local bird, err = client:Bird(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = VogelwarteSchweizSDK.test()
const result = await client.Bird().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = VogelwarteSchweizSDK.test(None, None)
result, err = client.Bird(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = VogelwarteSchweizSDK::test(null, null);
[$result, $err] = $client->Bird(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Bird(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = VogelwarteSchweizSDK.test(nil, nil)
result, err = client.Bird(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Bird(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Vogelwarte Schweiz

- Upstream: [https://www.vogelwarte.ch](https://www.vogelwarte.ch)
- API docs: [https://freepublicapis.com/vogelwarte-schweiz](https://freepublicapis.com/vogelwarte-schweiz)

- No public licence or terms of use are published for this API
- Endpoints were reverse-engineered from the public vogelwarte.ch website
- Data is the property of the [Schweizerische Vogelwarte Sempach](https://www.vogelwarte.ch); attribute the source and check with them before redistributing
- CORS is disabled, so calls from browsers will be blocked

---

Generated from the Vogelwarte Schweiz OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
