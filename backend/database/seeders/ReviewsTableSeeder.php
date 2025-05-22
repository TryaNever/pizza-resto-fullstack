<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ReviewsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('reviews')->insert([
            [
                'user_id' => 1,
                'product_id' => 1,
                'rating' => 5,
                'comment' => 'Excellente boisson, très rafraîchissante!',
                'created_at' => Carbon::now(),
            ],
            [
                'user_id' => 2,
                'product_id' => 3,
                'rating' => 4,
                'comment' => 'La tarte est délicieuse, un peu sucrée à mon goût.',
                'created_at' => Carbon::now(),
            ],
        ]);
    }
}
