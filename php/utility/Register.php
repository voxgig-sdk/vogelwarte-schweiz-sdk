<?php
declare(strict_types=1);

// VogelwarteSchweiz SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

VogelwarteSchweizUtility::setRegistrar(function (VogelwarteSchweizUtility $u): void {
    $u->clean = [VogelwarteSchweizClean::class, 'call'];
    $u->done = [VogelwarteSchweizDone::class, 'call'];
    $u->make_error = [VogelwarteSchweizMakeError::class, 'call'];
    $u->feature_add = [VogelwarteSchweizFeatureAdd::class, 'call'];
    $u->feature_hook = [VogelwarteSchweizFeatureHook::class, 'call'];
    $u->feature_init = [VogelwarteSchweizFeatureInit::class, 'call'];
    $u->fetcher = [VogelwarteSchweizFetcher::class, 'call'];
    $u->make_fetch_def = [VogelwarteSchweizMakeFetchDef::class, 'call'];
    $u->make_context = [VogelwarteSchweizMakeContext::class, 'call'];
    $u->make_options = [VogelwarteSchweizMakeOptions::class, 'call'];
    $u->make_request = [VogelwarteSchweizMakeRequest::class, 'call'];
    $u->make_response = [VogelwarteSchweizMakeResponse::class, 'call'];
    $u->make_result = [VogelwarteSchweizMakeResult::class, 'call'];
    $u->make_point = [VogelwarteSchweizMakePoint::class, 'call'];
    $u->make_spec = [VogelwarteSchweizMakeSpec::class, 'call'];
    $u->make_url = [VogelwarteSchweizMakeUrl::class, 'call'];
    $u->param = [VogelwarteSchweizParam::class, 'call'];
    $u->prepare_auth = [VogelwarteSchweizPrepareAuth::class, 'call'];
    $u->prepare_body = [VogelwarteSchweizPrepareBody::class, 'call'];
    $u->prepare_headers = [VogelwarteSchweizPrepareHeaders::class, 'call'];
    $u->prepare_method = [VogelwarteSchweizPrepareMethod::class, 'call'];
    $u->prepare_params = [VogelwarteSchweizPrepareParams::class, 'call'];
    $u->prepare_path = [VogelwarteSchweizPreparePath::class, 'call'];
    $u->prepare_query = [VogelwarteSchweizPrepareQuery::class, 'call'];
    $u->result_basic = [VogelwarteSchweizResultBasic::class, 'call'];
    $u->result_body = [VogelwarteSchweizResultBody::class, 'call'];
    $u->result_headers = [VogelwarteSchweizResultHeaders::class, 'call'];
    $u->transform_request = [VogelwarteSchweizTransformRequest::class, 'call'];
    $u->transform_response = [VogelwarteSchweizTransformResponse::class, 'call'];
});
