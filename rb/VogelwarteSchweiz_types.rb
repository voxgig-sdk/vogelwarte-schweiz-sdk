# frozen_string_literal: true

# Typed models for the VogelwarteSchweiz SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Bird entity data model.
#
# @!attribute [rw] commonNameDe
#   @return [String, nil]
#
# @!attribute [rw] commonNameEn
#   @return [String, nil]
#
# @!attribute [rw] commonNameFr
#   @return [String, nil]
#
# @!attribute [rw] commonNameIt
#   @return [String, nil]
#
# @!attribute [rw] conservationStatus
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] family
#   @return [String, nil]
#
# @!attribute [rw] habitat
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] length
#   @return [Hash, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] scientificName
#   @return [String, nil]
#
# @!attribute [rw] weight
#   @return [Hash, nil]
#
# @!attribute [rw] wingspan
#   @return [Hash, nil]
Bird = Struct.new(
  :commonNameDe,
  :commonNameEn,
  :commonNameFr,
  :commonNameIt,
  :conservationStatus,
  :description,
  :family,
  :habitat,
  :id,
  :imageUrl,
  :length,
  :order,
  :scientificName,
  :weight,
  :wingspan,
  keyword_init: true
)

# Request payload for Bird#load.
#
# @!attribute [rw] id
#   @return [String]
BirdLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Bird#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
BirdListMatch = Struct.new(
  :limit,
  :offset,
  :search,
  keyword_init: true
)

# Species entity data model.
#
# @!attribute [rw] characteristics
#   @return [Hash, nil]
#
# @!attribute [rw] commonNames
#   @return [Hash, nil]
#
# @!attribute [rw] conservationStatus
#   @return [String, nil]
#
# @!attribute [rw] distribution
#   @return [Hash, nil]
#
# @!attribute [rw] observationCount
#   @return [Integer, nil]
#
# @!attribute [rw] scientificName
#   @return [String, nil]
#
# @!attribute [rw] speciesId
#   @return [String, nil]
#
# @!attribute [rw] taxonomy
#   @return [Hash, nil]
Species = Struct.new(
  :characteristics,
  :commonNames,
  :conservationStatus,
  :distribution,
  :observationCount,
  :scientificName,
  :speciesId,
  :taxonomy,
  keyword_init: true
)

# Request payload for Species#list.
#
# @!attribute [rw] family
#   @return [String, nil]
#
# @!attribute [rw] habitat
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
SpeciesListMatch = Struct.new(
  :family,
  :habitat,
  :status,
  keyword_init: true
)

