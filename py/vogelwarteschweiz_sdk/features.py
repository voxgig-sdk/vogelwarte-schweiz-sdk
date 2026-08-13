# VogelwarteSchweiz SDK feature factory

from vogelwarteschweiz_sdk.feature.base_feature import VogelwarteSchweizBaseFeature
from vogelwarteschweiz_sdk.feature.test_feature import VogelwarteSchweizTestFeature


def _make_feature(name):
    features = {
        "base": lambda: VogelwarteSchweizBaseFeature(),
        "test": lambda: VogelwarteSchweizTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
