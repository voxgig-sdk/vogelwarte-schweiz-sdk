// Typed models for the VogelwarteSchweiz SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Bird is the typed data model for the bird entity.
type Bird struct {
	CommonNameDe *string `json:"common_name_de,omitempty"`
	CommonNameEn *string `json:"common_name_en,omitempty"`
	CommonNameFr *string `json:"common_name_fr,omitempty"`
	CommonNameIt *string `json:"common_name_it,omitempty"`
	ConservationStatus *string `json:"conservation_status,omitempty"`
	Description *string `json:"description,omitempty"`
	Family *string `json:"family,omitempty"`
	Habitat *[]any `json:"habitat,omitempty"`
	Id *string `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Length *map[string]any `json:"length,omitempty"`
	Order *string `json:"order,omitempty"`
	ScientificName *string `json:"scientific_name,omitempty"`
	Weight *map[string]any `json:"weight,omitempty"`
	Wingspan *map[string]any `json:"wingspan,omitempty"`
}

// BirdLoadMatch is the typed request payload for Bird.LoadTyped.
type BirdLoadMatch struct {
	Id string `json:"id"`
}

// BirdListMatch is the typed request payload for Bird.ListTyped.
type BirdListMatch struct {
	CommonNameDe *string `json:"common_name_de,omitempty"`
	CommonNameEn *string `json:"common_name_en,omitempty"`
	CommonNameFr *string `json:"common_name_fr,omitempty"`
	CommonNameIt *string `json:"common_name_it,omitempty"`
	ConservationStatus *string `json:"conservation_status,omitempty"`
	Description *string `json:"description,omitempty"`
	Family *string `json:"family,omitempty"`
	Habitat *[]any `json:"habitat,omitempty"`
	Id *string `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Length *map[string]any `json:"length,omitempty"`
	Order *string `json:"order,omitempty"`
	ScientificName *string `json:"scientific_name,omitempty"`
	Weight *map[string]any `json:"weight,omitempty"`
	Wingspan *map[string]any `json:"wingspan,omitempty"`
}

// Species is the typed data model for the species entity.
type Species struct {
	Characteristic *map[string]any `json:"characteristic,omitempty"`
	CommonName *map[string]any `json:"common_name,omitempty"`
	ConservationStatus *string `json:"conservation_status,omitempty"`
	Distribution *map[string]any `json:"distribution,omitempty"`
	ObservationCount *int `json:"observation_count,omitempty"`
	ScientificName *string `json:"scientific_name,omitempty"`
	SpeciesId *string `json:"species_id,omitempty"`
	Taxonomy *map[string]any `json:"taxonomy,omitempty"`
}

// SpeciesListMatch is the typed request payload for Species.ListTyped.
type SpeciesListMatch struct {
	Characteristic *map[string]any `json:"characteristic,omitempty"`
	CommonName *map[string]any `json:"common_name,omitempty"`
	ConservationStatus *string `json:"conservation_status,omitempty"`
	Distribution *map[string]any `json:"distribution,omitempty"`
	ObservationCount *int `json:"observation_count,omitempty"`
	ScientificName *string `json:"scientific_name,omitempty"`
	SpeciesId *string `json:"species_id,omitempty"`
	Taxonomy *map[string]any `json:"taxonomy,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
