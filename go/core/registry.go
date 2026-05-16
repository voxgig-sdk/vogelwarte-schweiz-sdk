package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewBirdEntityFunc func(client *VogelwarteSchweizSDK, entopts map[string]any) VogelwarteSchweizEntity

var NewSpeciesEntityFunc func(client *VogelwarteSchweizSDK, entopts map[string]any) VogelwarteSchweizEntity

