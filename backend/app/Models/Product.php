<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Product extends Model
{
    //
    public static function find($id)
    {
        $results = DB::select('select * from products where category_id = :id', ['id' => $id]);
        return $results;
    }
}
