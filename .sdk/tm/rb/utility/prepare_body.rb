# VogelwarteSchweiz SDK utility: prepare_body
require_relative 'media'
module VogelwarteSchweizUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return VogelwarteSchweizUtilities.raw_body(ctx.reqdata) if VogelwarteSchweizUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
