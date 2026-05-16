package core

type VogelwarteSchweizError struct {
	IsVogelwarteSchweizError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewVogelwarteSchweizError(code string, msg string, ctx *Context) *VogelwarteSchweizError {
	return &VogelwarteSchweizError{
		IsVogelwarteSchweizError: true,
		Sdk:              "VogelwarteSchweiz",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *VogelwarteSchweizError) Error() string {
	return e.Msg
}
