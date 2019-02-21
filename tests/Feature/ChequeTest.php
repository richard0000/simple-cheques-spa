<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ChequeTest extends TestCase
{
    /**
     * Get all the cheques
     *
     * @return void
     */
    public function testListOfAllCheques()
    {
        $response = $this->get('/cheques');

        $response->assertStatus(200);
    }

    /**
     * Get all the cheques
     *
     * @return void
     */
    public function testFilteredListOfChequesByRecipientNameOK()
    {
        $response = $this->get('/cheques?filter[recipientName_eq]=JohnDoe');

        $response->assertStatus(200);
    }


    /**
     * Get all the cheques
     *
     * @return void
     */
    public function testFilteredListOfChequesByAmountReject()
    {
        $response = $this->get('/cheques?filter[amount_eq]=5000');

        $response->assertStatus(200);
    }
}
