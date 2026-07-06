// Typed models for the VogelwarteSchweiz SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Bird {
  common_name_de?: string
  common_name_en?: string
  common_name_fr?: string
  common_name_it?: string
  conservation_status?: string
  description?: string
  family?: string
  habitat?: any[]
  id?: string
  image_url?: string
  length?: Record<string, any>
  order?: string
  scientific_name?: string
  weight?: Record<string, any>
  wingspan?: Record<string, any>
}

export interface BirdLoadMatch {
  id: string
}

export interface BirdListMatch {
  common_name_de?: string
  common_name_en?: string
  common_name_fr?: string
  common_name_it?: string
  conservation_status?: string
  description?: string
  family?: string
  habitat?: any[]
  id?: string
  image_url?: string
  length?: Record<string, any>
  order?: string
  scientific_name?: string
  weight?: Record<string, any>
  wingspan?: Record<string, any>
}

export interface Species {
  characteristic?: Record<string, any>
  common_name?: Record<string, any>
  conservation_status?: string
  distribution?: Record<string, any>
  observation_count?: number
  scientific_name?: string
  species_id?: string
  taxonomy?: Record<string, any>
}

export interface SpeciesListMatch {
  characteristic?: Record<string, any>
  common_name?: Record<string, any>
  conservation_status?: string
  distribution?: Record<string, any>
  observation_count?: number
  scientific_name?: string
  species_id?: string
  taxonomy?: Record<string, any>
}

