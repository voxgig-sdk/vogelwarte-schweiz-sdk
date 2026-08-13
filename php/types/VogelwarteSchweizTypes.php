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
    public ?string $commonNameDe = null;
    public ?string $commonNameEn = null;
    public ?string $commonNameFr = null;
    public ?string $commonNameIt = null;
    public ?string $conservationStatus = null;
    public ?string $description = null;
    public ?string $family = null;
    public ?array $habitat = null;
    public ?string $id = null;
    public ?string $imageUrl = null;
    public ?array $length = null;
    public ?string $order = null;
    public ?string $scientificName = null;
    public ?array $weight = null;
    public ?array $wingspan = null;
}

/** Request payload for Bird#load. */
class BirdLoadMatch
{
    public string $id;
}

/** Request payload for Bird#list. */
class BirdListMatch
{
    public ?string $commonNameDe = null;
    public ?string $commonNameEn = null;
    public ?string $commonNameFr = null;
    public ?string $commonNameIt = null;
    public ?string $conservationStatus = null;
    public ?string $description = null;
    public ?string $family = null;
    public ?array $habitat = null;
    public ?string $id = null;
    public ?string $imageUrl = null;
    public ?array $length = null;
    public ?string $order = null;
    public ?string $scientificName = null;
    public ?array $weight = null;
    public ?array $wingspan = null;
}

/** Species entity data model. */
class Species
{
    public ?array $characteristics = null;
    public ?array $commonNames = null;
    public ?string $conservationStatus = null;
    public ?array $distribution = null;
    public ?int $observationCount = null;
    public ?string $scientificName = null;
    public ?string $speciesId = null;
    public ?array $taxonomy = null;
}

/** Request payload for Species#list. */
class SpeciesListMatch
{
    public ?array $characteristics = null;
    public ?array $commonNames = null;
    public ?string $conservationStatus = null;
    public ?array $distribution = null;
    public ?int $observationCount = null;
    public ?string $scientificName = null;
    public ?string $speciesId = null;
    public ?array $taxonomy = null;
}

