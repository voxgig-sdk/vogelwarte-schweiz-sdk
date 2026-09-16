# VogelwarteSchweiz SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module VogelwarteSchweizFeatures
  def self.make_feature(name)
    case name
    when "base"
      VogelwarteSchweizBaseFeature.new
    when "ratelimit"
      VogelwarteSchweizRatelimitFeature.new
    when "retry"
      VogelwarteSchweizRetryFeature.new
    when "test"
      VogelwarteSchweizTestFeature.new
    when "timeout"
      VogelwarteSchweizTimeoutFeature.new
    else
      VogelwarteSchweizBaseFeature.new
    end
  end
end
