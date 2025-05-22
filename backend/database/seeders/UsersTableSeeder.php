<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
            [
                'first_name' => 'Alice',
                'last_name' => 'Martin',
                'email' => 'alice@example.com',
                'email_verified_at' => Carbon::now(),
                'password' => Hash::make('password123'),
                'remember_token' => Str::random(10),
                'role' => 'user',
                'address' => '123 rue de Paris',
                'phone' => '0601020304',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'first_name' => 'Bob',
                'last_name' => 'Dupont',
                'email' => 'bob@example.com',
                'email_verified_at' => Carbon::now(),
                'password' => Hash::make('password123'),
                'remember_token' => Str::random(10),
                'role' => 'admin',
                'address' => '456 avenue Lyon',
                'phone' => '0605060708',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
