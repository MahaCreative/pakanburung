<?php

use App\Http\Controllers\DataStokController;
use App\Http\Controllers\DataSuhuController;
use App\Http\Controllers\JadwalPakan;
use App\Http\Controllers\Response;
use App\Models\DataSuhu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get('response', [Response::class, 'index']);
Route::post('data-suhu', [DataSuhuController::class, 'store']);
Route::post('data-stok', [DataStokController::class, 'store']);
