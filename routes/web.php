<?php

use App\Http\Controllers\Dashboard;
use App\Http\Controllers\DataSuhuController;
use App\Http\Controllers\JadwalPakanController;
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

Route::get('', Dashboard::class)->name('dashboard');
Route::get('data-suhu', [DataSuhuController::class, 'index'])->name('data-suhu');

Route::put('button-set-makan', [StatusMakanController::class, 'button'])->name('status-makan-update');
Route::get('jadwal-pakan', [JadwalPakanController::class, 'index'])->name('jadwal-pakan');
Route::post('jadwal-pakan', [JadwalPakanController::class, 'store']);
Route::put('jadwal-pakan', [JadwalPakanController::class, 'update'])->name('jadwal-pakan-update');
Route::delete('jadwal-pakan', [JadwalPakanController::class, 'delete'])->name('jadwal-pakan-delete');
