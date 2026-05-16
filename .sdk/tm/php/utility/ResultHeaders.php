<?php
declare(strict_types=1);

// VogelwarteSchweiz SDK utility: result_headers

class VogelwarteSchweizResultHeaders
{
    public static function call(VogelwarteSchweizContext $ctx): ?VogelwarteSchweizResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
