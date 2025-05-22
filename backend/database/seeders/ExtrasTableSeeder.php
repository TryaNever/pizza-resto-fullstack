<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ExtrasTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('extras')->insert([
            [
                'name' => 'Sauce BBQ',
                'price' => 1.50,
                'description' => 'Sauce barbecue maison.',
                'created_at' => Carbon::now(),
            ],
            [
                'name' => 'Fromage Supplémentaire',
                'price' => 2.00,
                'description' => 'Tranche de fromage supplémentaire pour votre plat.',
                'created_at' => Carbon::now(),
            ],
        ]);
    }
}
