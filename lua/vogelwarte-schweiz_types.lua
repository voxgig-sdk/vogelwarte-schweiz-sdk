-- Typed models for the VogelwarteSchweiz SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Bird
---@field common_name_de? string
---@field common_name_en? string
---@field common_name_fr? string
---@field common_name_it? string
---@field conservation_status? string
---@field description? string
---@field family? string
---@field habitat? table
---@field id? string
---@field image_url? string
---@field length? table
---@field order? string
---@field scientific_name? string
---@field weight? table
---@field wingspan? table

---@class BirdLoadMatch
---@field id string

---@class BirdListMatch

---@class Species
---@field characteristic? table
---@field common_name? table
---@field conservation_status? string
---@field distribution? table
---@field observation_count? number
---@field scientific_name? string
---@field species_id? string
---@field taxonomy? table

---@class SpeciesListMatch

local M = {}

return M
