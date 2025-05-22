<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductExtraTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('product_extra')->insert([
            ['product_id' => 2, 'extra_id' => 1],
            ['product_id' => 2, 'extra_id' => 2],
        ]);
    }
}
