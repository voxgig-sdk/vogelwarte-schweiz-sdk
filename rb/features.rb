# VogelwarteSchweiz SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module VogelwarteSchweizFeatures
  def self.make_feature(name)
    case name
    when "base"
      VogelwarteSchweizBaseFeature.new
    when "test"
      VogelwarteSchweizTestFeature.new
    else
      VogelwarteSchweizBaseFeature.new
    end
  end
end
