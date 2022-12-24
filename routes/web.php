<?php

use App\Http\Controllers\Dashboard;
use App\Http\Controllers\StatusMakanController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('dashboard', Dashboard::class)->name('dashboard');
Route::put('button-set-makan', [StatusMakanController::class, 'button'])->name('status-makan-update');
