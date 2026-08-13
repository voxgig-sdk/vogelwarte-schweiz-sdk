-- Typed models for the VogelwarteSchweiz SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Bird
---@field commonNameDe? string
---@field commonNameEn? string
---@field commonNameFr? string
---@field commonNameIt? string
---@field conservationStatus? string
---@field description? string
---@field family? string
---@field habitat? table
---@field id? string
---@field imageUrl? string
---@field length? table
---@field order? string
---@field scientificName? string
---@field weight? table
---@field wingspan? table

---@class BirdLoadMatch
---@field id string

---@class BirdListMatch
---@field commonNameDe? string
---@field commonNameEn? string
---@field commonNameFr? string
---@field commonNameIt? string
---@field conservationStatus? string
---@field description? string
---@field family? string
---@field habitat? table
---@field id? string
---@field imageUrl? string
---@field length? table
---@field order? string
---@field scientificName? string
---@field weight? table
---@field wingspan? table

---@class Species
---@field characteristics? table
---@field commonNames? table
---@field conservationStatus? string
---@field distribution? table
---@field observationCount? number
---@field scientificName? string
---@field speciesId? string
---@field taxonomy? table

---@class SpeciesListMatch
---@field characteristics? table
---@field commonNames? table
---@field conservationStatus? string
---@field distribution? table
---@field observationCount? number
---@field scientificName? string
---@field speciesId? string
---@field taxonomy? table

local M = {}

return M
