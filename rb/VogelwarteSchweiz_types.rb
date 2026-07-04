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
# @!attribute [rw] common_name_de
#   @return [String, nil]
#
# @!attribute [rw] common_name_en
#   @return [String, nil]
#
# @!attribute [rw] common_name_fr
#   @return [String, nil]
#
# @!attribute [rw] common_name_it
#   @return [String, nil]
#
# @!attribute [rw] conservation_status
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
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] length
#   @return [Hash, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] scientific_name
#   @return [String, nil]
#
# @!attribute [rw] weight
#   @return [Hash, nil]
#
# @!attribute [rw] wingspan
#   @return [Hash, nil]
Bird = Struct.new(
  :common_name_de,
  :common_name_en,
  :common_name_fr,
  :common_name_it,
  :conservation_status,
  :description,
  :family,
  :habitat,
  :id,
  :image_url,
  :length,
  :order,
  :scientific_name,
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

# Match filter for Bird#list (any subset of Bird fields).
#
# @!attribute [rw] common_name_de
#   @return [String, nil]
#
# @!attribute [rw] common_name_en
#   @return [String, nil]
#
# @!attribute [rw] common_name_fr
#   @return [String, nil]
#
# @!attribute [rw] common_name_it
#   @return [String, nil]
#
# @!attribute [rw] conservation_status
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
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] length
#   @return [Hash, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] scientific_name
#   @return [String, nil]
#
# @!attribute [rw] weight
#   @return [Hash, nil]
#
# @!attribute [rw] wingspan
#   @return [Hash, nil]
BirdListMatch = Struct.new(
  :common_name_de,
  :common_name_en,
  :common_name_fr,
  :common_name_it,
  :conservation_status,
  :description,
  :family,
  :habitat,
  :id,
  :image_url,
  :length,
  :order,
  :scientific_name,
  :weight,
  :wingspan,
  keyword_init: true
)

# Species entity data model.
#
# @!attribute [rw] characteristic
#   @return [Hash, nil]
#
# @!attribute [rw] common_name
#   @return [Hash, nil]
#
# @!attribute [rw] conservation_status
#   @return [String, nil]
#
# @!attribute [rw] distribution
#   @return [Hash, nil]
#
# @!attribute [rw] observation_count
#   @return [Integer, nil]
#
# @!attribute [rw] scientific_name
#   @return [String, nil]
#
# @!attribute [rw] species_id
#   @return [String, nil]
#
# @!attribute [rw] taxonomy
#   @return [Hash, nil]
Species = Struct.new(
  :characteristic,
  :common_name,
  :conservation_status,
  :distribution,
  :observation_count,
  :scientific_name,
  :species_id,
  :taxonomy,
  keyword_init: true
)

# Match filter for Species#list (any subset of Species fields).
#
# @!attribute [rw] characteristic
#   @return [Hash, nil]
#
# @!attribute [rw] common_name
#   @return [Hash, nil]
#
# @!attribute [rw] conservation_status
#   @return [String, nil]
#
# @!attribute [rw] distribution
#   @return [Hash, nil]
#
# @!attribute [rw] observation_count
#   @return [Integer, nil]
#
# @!attribute [rw] scientific_name
#   @return [String, nil]
#
# @!attribute [rw] species_id
#   @return [String, nil]
#
# @!attribute [rw] taxonomy
#   @return [Hash, nil]
SpeciesListMatch = Struct.new(
  :characteristic,
  :common_name,
  :conservation_status,
  :distribution,
  :observation_count,
  :scientific_name,
  :species_id,
  :taxonomy,
  keyword_init: true
)

