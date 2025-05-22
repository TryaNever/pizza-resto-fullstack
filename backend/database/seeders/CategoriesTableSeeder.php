<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class CategoriesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('categories')->insert([
            [
                'name' => 'Burger',
                'description' => 'Des Burgers très bon -_-',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Pizza',
                'description' => 'Des Pizzas très bonnes -_-',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Cup Cake',
                'description' => 'Douceurs pour terminer en beauté.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ], [
                'name' => 'Ramen',
                'description' => 'Des Chinois',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);

        DB::table('category_images')->insert([
            [
                'category_id' => 1,
                'image_url' => 'images/categories/burger.jpg',
            ], [
                'category_id' => 2,
                'image_url' => 'images/categories/burger.jpg',
            ], [
                'category_id' => 3,
                'image_url' => 'images/categories/burger.jpg',
            ], [
                'category_id' => 4,
                'image_url' => 'images/categories/burger.jpg',
            ],
        ]);
    }
}
