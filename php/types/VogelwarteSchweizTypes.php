<?php
declare(strict_types=1);

// Typed models for the VogelwarteSchweiz SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Bird entity data model. */
class Bird
{
    public ?string $common_name_de = null;
    public ?string $common_name_en = null;
    public ?string $common_name_fr = null;
    public ?string $common_name_it = null;
    public ?string $conservation_status = null;
    public ?string $description = null;
    public ?string $family = null;
    public ?array $habitat = null;
    public ?string $id = null;
    public ?string $image_url = null;
    public ?array $length = null;
    public ?string $order = null;
    public ?string $scientific_name = null;
    public ?array $weight = null;
    public ?array $wingspan = null;
}

/** Request payload for Bird#load. */
class BirdLoadMatch
{
    public string $id;
}

/** Match filter for Bird#list (any subset of Bird fields). */
class BirdListMatch
{
    public ?string $common_name_de = null;
    public ?string $common_name_en = null;
    public ?string $common_name_fr = null;
    public ?string $common_name_it = null;
    public ?string $conservation_status = null;
    public ?string $description = null;
    public ?string $family = null;
    public ?array $habitat = null;
    public ?string $id = null;
    public ?string $image_url = null;
    public ?array $length = null;
    public ?string $order = null;
    public ?string $scientific_name = null;
    public ?array $weight = null;
    public ?array $wingspan = null;
}

/** Species entity data model. */
class Species
{
    public ?array $characteristic = null;
    public ?array $common_name = null;
    public ?string $conservation_status = null;
    public ?array $distribution = null;
    public ?int $observation_count = null;
    public ?string $scientific_name = null;
    public ?string $species_id = null;
    public ?array $taxonomy = null;
}

/** Match filter for Species#list (any subset of Species fields). */
class SpeciesListMatch
{
    public ?array $characteristic = null;
    public ?array $common_name = null;
    public ?string $conservation_status = null;
    public ?array $distribution = null;
    public ?int $observation_count = null;
    public ?string $scientific_name = null;
    public ?string $species_id = null;
    public ?array $taxonomy = null;
}

