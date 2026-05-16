# VogelwarteSchweiz SDK utility: feature_add
module VogelwarteSchweizUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
