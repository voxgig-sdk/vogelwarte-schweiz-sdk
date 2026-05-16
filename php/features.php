<?php
declare(strict_types=1);

// VogelwarteSchweiz SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class VogelwarteSchweizFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new VogelwarteSchweizBaseFeature();
            case "test":
                return new VogelwarteSchweizTestFeature();
            default:
                return new VogelwarteSchweizBaseFeature();
        }
    }
}
