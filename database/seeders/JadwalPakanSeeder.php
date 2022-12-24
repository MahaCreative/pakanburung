<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JadwalPakanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("jadwa_pakans")->insert([
            ['jam' => '12:57'],
            ['jam' => '12:58'],
            ['jam' => '12:60'],
        ]);
    }
}
