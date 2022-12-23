<?php

use App\Http\Controllers\JadwalPakan;
use App\Http\Controllers\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::apiResource('jadwal_pakan', JadwalPakan::class);
Route::get('response', [Response::class, 'index']);
Route::get('coba', function (\Illuminate\Http\Request $request) {

    return 'abg';
});
