<?php
declare(strict_types=1);

// VogelwarteSchweiz SDK utility: result_body

class VogelwarteSchweizResultBody
{
    public static function call(VogelwarteSchweizContext $ctx): ?VogelwarteSchweizResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
