<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class OrdersTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('orders')->insert([
            [
                'user_id' => 1,
                'total' => 20.00,
                'status' => 'pending',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'user_id' => 2,
                'total' => 15.00,
                'status' => 'delivered',
                'created_at' => Carbon::yesterday(),
                'updated_at' => Carbon::yesterday(),
            ],
        ]);
    }
}
