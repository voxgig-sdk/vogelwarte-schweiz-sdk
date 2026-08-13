# VogelwarteSchweiz SDK utility: make_context

from vogelwarteschweiz_sdk.core.context import VogelwarteSchweizContext


def make_context_util(ctxmap, basectx):
    return VogelwarteSchweizContext(ctxmap, basectx)
