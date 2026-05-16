# VogelwarteSchweiz SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

VogelwarteSchweizUtility.registrar = ->(u) {
  u.clean = VogelwarteSchweizUtilities::Clean
  u.done = VogelwarteSchweizUtilities::Done
  u.make_error = VogelwarteSchweizUtilities::MakeError
  u.feature_add = VogelwarteSchweizUtilities::FeatureAdd
  u.feature_hook = VogelwarteSchweizUtilities::FeatureHook
  u.feature_init = VogelwarteSchweizUtilities::FeatureInit
  u.fetcher = VogelwarteSchweizUtilities::Fetcher
  u.make_fetch_def = VogelwarteSchweizUtilities::MakeFetchDef
  u.make_context = VogelwarteSchweizUtilities::MakeContext
  u.make_options = VogelwarteSchweizUtilities::MakeOptions
  u.make_request = VogelwarteSchweizUtilities::MakeRequest
  u.make_response = VogelwarteSchweizUtilities::MakeResponse
  u.make_result = VogelwarteSchweizUtilities::MakeResult
  u.make_point = VogelwarteSchweizUtilities::MakePoint
  u.make_spec = VogelwarteSchweizUtilities::MakeSpec
  u.make_url = VogelwarteSchweizUtilities::MakeUrl
  u.param = VogelwarteSchweizUtilities::Param
  u.prepare_auth = VogelwarteSchweizUtilities::PrepareAuth
  u.prepare_body = VogelwarteSchweizUtilities::PrepareBody
  u.prepare_headers = VogelwarteSchweizUtilities::PrepareHeaders
  u.prepare_method = VogelwarteSchweizUtilities::PrepareMethod
  u.prepare_params = VogelwarteSchweizUtilities::PrepareParams
  u.prepare_path = VogelwarteSchweizUtilities::PreparePath
  u.prepare_query = VogelwarteSchweizUtilities::PrepareQuery
  u.result_basic = VogelwarteSchweizUtilities::ResultBasic
  u.result_body = VogelwarteSchweizUtilities::ResultBody
  u.result_headers = VogelwarteSchweizUtilities::ResultHeaders
  u.transform_request = VogelwarteSchweizUtilities::TransformRequest
  u.transform_response = VogelwarteSchweizUtilities::TransformResponse
}
