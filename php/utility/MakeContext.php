<?php
declare(strict_types=1);

// VogelwarteSchweiz SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class VogelwarteSchweizMakeContext
{
    public static function call(array $ctxmap, ?VogelwarteSchweizContext $basectx): VogelwarteSchweizContext
    {
        return new VogelwarteSchweizContext($ctxmap, $basectx);
    }
}
