<?php
declare(strict_types=1);

// VogelwarteSchweiz SDK utility: prepare_body

class VogelwarteSchweizPrepareBody
{
    public static function call(VogelwarteSchweizContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
