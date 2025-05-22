<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller {
    public function details($id)

    {
        // Vérifie que l'ID est bien présent et valide
        if (empty($id) || !is_numeric($id) || intval($id) <= 0) {
            return response()->json([
                'error' => 'ID invalide ou manquant'
            ], 400); // Erreur 400 Bad Request
        }

        try {
            $product = Product::find($id);

            if (!$product) {
                return response()->json([
                    'error' => 'Produit non trouvé'
                ], 404); // Erreur 404 Not Found
            }
            $product = DB::table('products')
                ->where('id', $id)
                ->select('id', 'name', 'description', 'price','image')
                ->first();
            $extras = DB::table('product_extra')
                ->join('extras', 'product_extra.extra_id', '=', 'extras.id')
                ->where('product_extra.product_id', $id)
                ->select('extras.id', 'extras.name', 'extras.price')
                ->get();
            $reviews = DB::table('reviews')
                ->join('users', 'reviews.user_id', '=', 'users.id')
                ->where('reviews.product_id', $id)
                ->select('users.first_name as user', 'reviews.rating', 'reviews.comment', DB::raw('DATE(reviews.created_at) as date'))
                ->get();
            $rateAverage = $reviews->avg('rating');
            $response = [
                'product' => $product,
                'extras' => $extras,
                'reviews' => $reviews,
                'rateAverage' => round($rateAverage, 2),
            ];


            return response()->json([
                'product' => $response
            ], 200); // 200 OK

        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Une erreur est survenue',
                'message' => $e->getMessage()
            ], 500); // Erreur 500 Internal Server Error
        }
    }
}
