# VogelwarteSchweiz SDK utility: make_context
require_relative '../core/context'
module VogelwarteSchweizUtilities
  MakeContext = ->(ctxmap, basectx) {
    VogelwarteSchweizContext.new(ctxmap, basectx)
  }
end
