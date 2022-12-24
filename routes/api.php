<?php

use App\Http\Controllers\DataSuhuController;
use App\Http\Controllers\JadwalPakan;
use App\Http\Controllers\Response;
use App\Models\DataSuhu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::apiResource('jadwal_pakan', JadwalPakan::class);
Route::get('response', [Response::class, 'index']);
// Route::apiResource('data-suhu', DataSuhuController::class);
Route::get('data-suhu', [DataSuhuController::class, 'index']);
Route::post('data-suhu-create', [DataSuhuController::class, 'store']);
Route::post('coba', function (\Illuminate\Http\Request $request) {
    \Illuminate\Support\Facades\Storage::append(
        "arduino-log.txt",
        "Time: " . now()->format("Y-m-d H:i:s") . ', ' .
            "Temperature: " . $request->get("temperature", "n/a") . '°C, ' .
            "Humidity: " . $request->get("humidity", "n/a") . '%'
    );
});
