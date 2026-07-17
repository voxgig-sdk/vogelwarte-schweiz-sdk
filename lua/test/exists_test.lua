-- VogelwarteSchweiz SDK exists test

local sdk = require("vogelwarte-schweiz_sdk")

describe("VogelwarteSchweizSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
