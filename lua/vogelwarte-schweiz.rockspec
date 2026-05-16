package = "voxgig-sdk-vogelwarte-schweiz"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/vogelwarte-schweiz-sdk.git"
}
description = {
  summary = "VogelwarteSchweiz SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
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
