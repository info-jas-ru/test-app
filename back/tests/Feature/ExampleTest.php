<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function test_users_get(): void
    {
        $response = $this->get('/api/users/');
        $response->assertStatus(200);
    }

    public function test_users_description_is_not_empty(): void
    {
        $response = $this->getJson('/api/users/');
        $json = $response->json();

        $bad=0;
        for($i=0; $i<=count($json['data'])-1; $i++){
            if($json['data'][$i]['description'] === null){
                $bad=1;
            }
        }

        if(!$bad){
            $this->assertTrue(true);
        }else{
            $this->assertTrue(false);
        }
    }
}
