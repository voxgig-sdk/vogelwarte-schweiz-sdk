<?php
declare(strict_types=1);

// VogelwarteSchweiz SDK utility: feature_add

class VogelwarteSchweizFeatureAdd
{
    public static function call(VogelwarteSchweizContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
