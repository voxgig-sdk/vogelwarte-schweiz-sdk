# ProjectName SDK exists test

import pytest
from vogelwarteschweiz_sdk import VogelwarteSchweizSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = VogelwarteSchweizSDK.test(None, None)
        assert testsdk is not None
