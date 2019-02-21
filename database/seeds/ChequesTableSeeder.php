<?php

use Illuminate\Database\Seeder;

class ChequesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Cheque::class, 50)->create();
    }
}
