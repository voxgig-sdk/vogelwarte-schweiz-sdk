-- VogelwarteSchweiz SDK error

local VogelwarteSchweizError = {}
VogelwarteSchweizError.__index = VogelwarteSchweizError


function VogelwarteSchweizError.new(code, msg, ctx)
  local self = setmetatable({}, VogelwarteSchweizError)
  self.is_sdk_error = true
  self.sdk = "VogelwarteSchweiz"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function VogelwarteSchweizError:error()
  return self.msg
end


function VogelwarteSchweizError:__tostring()
  return self.msg
end


return VogelwarteSchweizError
