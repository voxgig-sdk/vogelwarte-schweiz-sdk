# VogelwarteSchweiz SDK exists test

require "minitest/autorun"
require_relative "../VogelwarteSchweiz_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = VogelwarteSchweizSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
