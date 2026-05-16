
import { Context } from './Context'


class VogelwarteSchweizError extends Error {

  isVogelwarteSchweizError = true

  sdk = 'VogelwarteSchweiz'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  VogelwarteSchweizError
}

