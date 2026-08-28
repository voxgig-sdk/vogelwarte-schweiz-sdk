// Typed models for the VogelwarteSchweiz SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Bird {
  commonNameDe?: string
  commonNameEn?: string
  commonNameFr?: string
  commonNameIt?: string
  conservationStatus?: string
  description?: string
  family?: string
  habitat?: any[]
  id?: string
  imageUrl?: string
  length?: Record<string, any>
  order?: string
  scientificName?: string
  weight?: Record<string, any>
  wingspan?: Record<string, any>
}

export interface BirdLoadMatch {
  id: string
}

export interface BirdListMatch {
  limit?: number
  offset?: number
  search?: string
}

export interface Species {
  characteristics?: Record<string, any>
  commonNames?: Record<string, any>
  conservationStatus?: string
  distribution?: Record<string, any>
  observationCount?: number
  scientificName?: string
  speciesId?: string
  taxonomy?: Record<string, any>
}

export interface SpeciesListMatch {
  family?: string
  habitat?: string
  status?: string
}

