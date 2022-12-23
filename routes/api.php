<?php

use App\Http\Controllers\JadwalPakan;
use App\Http\Controllers\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::apiResource('jadwal_pakan', JadwalPakan::class);
Route::get('response', [Response::class, 'index']);
Route::post('post', function (\Illuminate\Http\Request $request) {
    \Illuminate\Support\Facades\Storage::append(
        "arduino-log.txt",
        "Time: " . now()->format("Y-m-d H:i:s") . ', ' .
            "Temperature: " . $request->get("temperature", "n/a") . '°C, ' .
            "Humidity: " . $request->get("humidity", "n/a") . '%'
    );
    return 'true';
});
