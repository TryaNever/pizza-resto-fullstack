<?php

namespace Database\Seeders;

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
        // Appeler les seeders ici
        $this->call([
            CategoriesTableSeeder::class,
            ProductsTableSeeder::class,
            UsersTableSeeder::class,
            OrdersTableSeeder::class,
            OrderItemsTableSeeder::class,
            ExtrasTableSeeder::class,
            ProductExtraTableSeeder::class,
            ReviewsTableSeeder::class,
            ContactMessagesTableSeeder::class,
        ]);
    }
}
