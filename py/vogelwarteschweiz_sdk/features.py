# VogelwarteSchweiz SDK feature factory

from vogelwarteschweiz_sdk.feature.base_feature import VogelwarteSchweizBaseFeature
from vogelwarteschweiz_sdk.feature.ratelimit_feature import VogelwarteSchweizRatelimitFeature
from vogelwarteschweiz_sdk.feature.retry_feature import VogelwarteSchweizRetryFeature
from vogelwarteschweiz_sdk.feature.test_feature import VogelwarteSchweizTestFeature
from vogelwarteschweiz_sdk.feature.timeout_feature import VogelwarteSchweizTimeoutFeature


_FEATURES = {
    "base": lambda: VogelwarteSchweizBaseFeature(),
    "ratelimit": lambda: VogelwarteSchweizRatelimitFeature(),
    "retry": lambda: VogelwarteSchweizRetryFeature(),
    "test": lambda: VogelwarteSchweizTestFeature(),
    "timeout": lambda: VogelwarteSchweizTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
