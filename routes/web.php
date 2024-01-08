<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\StartupsController;
use App\Http\Controllers\Startup\StartupController;
use App\Http\Controllers\Startup\serviceController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/





Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return view('admin.dashboard');
    })->name('dashboard');
    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // Categories
    Route::get('/categories', [CategoryController::class, 'index'])->name('cats');
    Route::get('/categories/add', [CategoryController::class, 'create'])->name('cats.add');
    Route::post('/categories', [CategoryController::class, 'store'])->name('cats.store');
    Route::get('/categories/edit/{catid?}', [CategoryController::class, 'show'])->name('cats.edit');
    Route::put('/categories/edit/{catid?}', [CategoryController::class, 'update'])->name('cats.update');
    Route::delete('/categories/delete/{catid?}', [CategoryController::class, 'destroy'])->name('cats.destroy');
    // Startups
    Route::get('/startups', [StartupsController::class, 'index'])->name('startups');
    Route::delete('/startups/delete/{startup?}', [StartupsController::class, 'destroy'])->name('startups.destroy');
    Route::get('/startups/show/{startup?}', [StartupsController::class, 'show'])->name('startups.show');

    
      
});
// Startup of Client 
Route::get('/startup/{startupId}', [StartupController::class, 'index'])->name('dashboard.startup');
Route::get('/startup/services/{startupId}', [StartupController::class, 'services'])->name('services.startup');
Route::get('/startup/services/add/{startupId}', [serviceController::class, 'create'])->name('services.add');
Route::post('/startup/services/store/{startupId}', [serviceController::class, 'store'])->name('services.store');
Route::delete('/startup/services/delete/{serviceId}/{startupId}', [serviceController::class, 'destroy'])->name('services.destroy');
Route::get('/startup/show/{startupId}', [StartupController::class, 'show'])->name('mystartup');
  
require __DIR__.'/auth.php';

