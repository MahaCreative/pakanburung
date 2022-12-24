<?php

use App\Http\Controllers\DataSuhuController;
use App\Http\Controllers\JadwalPakan;
use App\Http\Controllers\Response;
use App\Models\DataSuhu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get('response', [Response::class, 'index']);
Route::apiResource('data-suhu', DataSuhuController::class);
