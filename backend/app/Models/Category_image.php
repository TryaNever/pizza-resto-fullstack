<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Category_image extends Model
{
    //
    public static function find(mixed $id)
    {
        $results = DB::select('select image_url from category_images where category_id = :id', ['id' => $id]);
        return $results;
    }
}
