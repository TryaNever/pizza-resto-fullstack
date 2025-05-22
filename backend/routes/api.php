<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AuthController;

use Illuminate\Support\Facades\Route;

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'details']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/signin', [AuthController::class, 'signin']);
Route::middleware('api')->get('/user',  [AuthController::class, 'me']);
