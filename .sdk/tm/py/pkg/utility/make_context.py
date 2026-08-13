# VogelwarteSchweiz SDK utility: make_context

from projectname_sdk.core.context import VogelwarteSchweizContext


def make_context_util(ctxmap, basectx):
    return VogelwarteSchweizContext(ctxmap, basectx)
