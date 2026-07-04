# Typed models for the VogelwarteSchweiz SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Bird(TypedDict, total=False):
    common_name_de: str
    common_name_en: str
    common_name_fr: str
    common_name_it: str
    conservation_status: str
    description: str
    family: str
    habitat: list
    id: str
    image_url: str
    length: dict
    order: str
    scientific_name: str
    weight: dict
    wingspan: dict


class BirdLoadMatch(TypedDict):
    id: str


class BirdListMatch(TypedDict, total=False):
    common_name_de: str
    common_name_en: str
    common_name_fr: str
    common_name_it: str
    conservation_status: str
    description: str
    family: str
    habitat: list
    id: str
    image_url: str
    length: dict
    order: str
    scientific_name: str
    weight: dict
    wingspan: dict


class Species(TypedDict, total=False):
    characteristic: dict
    common_name: dict
    conservation_status: str
    distribution: dict
    observation_count: int
    scientific_name: str
    species_id: str
    taxonomy: dict


class SpeciesListMatch(TypedDict, total=False):
    characteristic: dict
    common_name: dict
    conservation_status: str
    distribution: dict
    observation_count: int
    scientific_name: str
    species_id: str
    taxonomy: dict
