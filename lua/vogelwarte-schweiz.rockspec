package = "voxgig-sdk-vogelwarte-schweiz"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/vogelwarte-schweiz-sdk.git",
  tag = "lua/v0.0.1",
  dir = "vogelwarte-schweiz-sdk/lua"
}
description = {
  summary = "Unofficial generated Lua SDK for the Vogelwarte Schweiz public API. Not affiliated with or endorsed by the upstream API provider.",
  homepage = "https://github.com/voxgig-sdk/vogelwarte-schweiz-sdk",
  issues_url = "https://github.com/voxgig-sdk/vogelwarte-schweiz-sdk/issues",
  license = "MIT",
  labels = { "voxgig", "sdk", "generated-sdk", "openapi", "api-client", "vogelwarte-schweiz" }
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["vogelwarte-schweiz_sdk"] = "vogelwarte-schweiz_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
