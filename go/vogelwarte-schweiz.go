package voxgigvogelwarteschweizsdk

import (
	"github.com/voxgig-sdk/vogelwarte-schweiz-sdk/core"
	"github.com/voxgig-sdk/vogelwarte-schweiz-sdk/entity"
	"github.com/voxgig-sdk/vogelwarte-schweiz-sdk/feature"
	_ "github.com/voxgig-sdk/vogelwarte-schweiz-sdk/utility"
)

// Type aliases preserve external API.
type VogelwarteSchweizSDK = core.VogelwarteSchweizSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type VogelwarteSchweizEntity = core.VogelwarteSchweizEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type VogelwarteSchweizError = core.VogelwarteSchweizError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewBirdEntityFunc = func(client *core.VogelwarteSchweizSDK, entopts map[string]any) core.VogelwarteSchweizEntity {
		return entity.NewBirdEntity(client, entopts)
	}
	core.NewSpeciesEntityFunc = func(client *core.VogelwarteSchweizSDK, entopts map[string]any) core.VogelwarteSchweizEntity {
		return entity.NewSpeciesEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewVogelwarteSchweizSDK = core.NewVogelwarteSchweizSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
