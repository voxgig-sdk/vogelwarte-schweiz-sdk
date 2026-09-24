
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { VogelwarteSchweizSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = VogelwarteSchweizSDK.test()
    equal(testsdk instanceof VogelwarteSchweizSDK, true,
      'VogelwarteSchweizSDK.test() must return a client synchronously')
  })

})
