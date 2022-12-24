<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JadwalPakanSeeder extends Seeder
{

    public function run()
    {
        DB::table("jadwa_pakans")->insert([
            ['jam' => '17:16'],
            ['jam' => '17:17'],
            ['jam' => '17:18'],
        ]);
    }
}
