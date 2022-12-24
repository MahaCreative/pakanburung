<?php

namespace Database\Seeders;

use App\Models\StatusMakan;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        StatusMakan::create(['status' => "off"]);
        $this->call([
            JadwalPakanSeeder::class
        ]);
    }
}
