<?php

namespace Database\Seeders;

use App\Models\StatusMakan;
use App\Models\User;
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
        User::create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('password')
        ]);
        $this->call([
            JadwalPakanSeeder::class
        ]);
    }
}
