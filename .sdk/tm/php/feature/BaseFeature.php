<?php
declare(strict_types=1);

// VogelwarteSchweiz SDK base feature

class VogelwarteSchweizBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(VogelwarteSchweizContext $ctx, array $options): void {}
    public function PostConstruct(VogelwarteSchweizContext $ctx): void {}
    public function PostConstructEntity(VogelwarteSchweizContext $ctx): void {}
    public function SetData(VogelwarteSchweizContext $ctx): void {}
    public function GetData(VogelwarteSchweizContext $ctx): void {}
    public function GetMatch(VogelwarteSchweizContext $ctx): void {}
    public function SetMatch(VogelwarteSchweizContext $ctx): void {}
    public function PrePoint(VogelwarteSchweizContext $ctx): void {}
    public function PreSpec(VogelwarteSchweizContext $ctx): void {}
    public function PreRequest(VogelwarteSchweizContext $ctx): void {}
    public function PreResponse(VogelwarteSchweizContext $ctx): void {}
    public function PreResult(VogelwarteSchweizContext $ctx): void {}
    public function PreDone(VogelwarteSchweizContext $ctx): void {}
    public function PreUnexpected(VogelwarteSchweizContext $ctx): void {}
}
