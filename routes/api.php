<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\StartupController;
use App\Http\Controllers\Api\MessageController;
use App\Http\Controllers\Api\NewsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/register',[ AuthController::class, 'store']);

Route::post('/login',[ AuthController::class, 'login']);
Route::get('/categories',[ CategoryController::class, 'getCategories']);
Route::get('/startups',[ StartupController::class, 'getStartups']);
Route::get('/startup/{id}',[ StartupController::class, 'getStartupinfo']);
Route::get('/services/startup/{id}',[ StartupController::class, 'getStartupinfo']);
Route::get('/cat/startup/{catId}',[ StartupController::class, 'getServices']);

    
Route::get('/news/all', [NewsController::class, 'index']);
Route::get('/news/show/{news?}', [NewsController::class, 'show']);
Route::post('/message/store',[ MessageController::class, 'store']);
Route::get('/message/all',[ MessageController::class, 'getAll']);

