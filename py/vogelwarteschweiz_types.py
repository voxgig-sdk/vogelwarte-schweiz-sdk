# Typed models for the VogelwarteSchweiz SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Bird:
    common_name_de: Optional[str] = None
    common_name_en: Optional[str] = None
    common_name_fr: Optional[str] = None
    common_name_it: Optional[str] = None
    conservation_status: Optional[str] = None
    description: Optional[str] = None
    family: Optional[str] = None
    habitat: Optional[list] = None
    id: Optional[str] = None
    image_url: Optional[str] = None
    length: Optional[dict] = None
    order: Optional[str] = None
    scientific_name: Optional[str] = None
    weight: Optional[dict] = None
    wingspan: Optional[dict] = None


@dataclass
class BirdLoadMatch:
    id: str


@dataclass
class BirdListMatch:
    common_name_de: Optional[str] = None
    common_name_en: Optional[str] = None
    common_name_fr: Optional[str] = None
    common_name_it: Optional[str] = None
    conservation_status: Optional[str] = None
    description: Optional[str] = None
    family: Optional[str] = None
    habitat: Optional[list] = None
    id: Optional[str] = None
    image_url: Optional[str] = None
    length: Optional[dict] = None
    order: Optional[str] = None
    scientific_name: Optional[str] = None
    weight: Optional[dict] = None
    wingspan: Optional[dict] = None


@dataclass
class Species:
    characteristic: Optional[dict] = None
    common_name: Optional[dict] = None
    conservation_status: Optional[str] = None
    distribution: Optional[dict] = None
    observation_count: Optional[int] = None
    scientific_name: Optional[str] = None
    species_id: Optional[str] = None
    taxonomy: Optional[dict] = None


@dataclass
class SpeciesListMatch:
    characteristic: Optional[dict] = None
    common_name: Optional[dict] = None
    conservation_status: Optional[str] = None
    distribution: Optional[dict] = None
    observation_count: Optional[int] = None
    scientific_name: Optional[str] = None
    species_id: Optional[str] = None
    taxonomy: Optional[dict] = None

