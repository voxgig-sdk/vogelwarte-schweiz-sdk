<?php
declare(strict_types=1);

// VogelwarteSchweiz SDK exists test

require_once __DIR__ . '/../vogelwarteschweiz_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = VogelwarteSchweizSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
