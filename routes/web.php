<?php

use App\Http\Controllers\Dashboard;
use App\Http\Controllers\DataStokController;
use App\Http\Controllers\DataSuhuController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\JadwalPakanController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\StatusMakanController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Salman\Mqtt\Facades\Mqtt as FacadesMqtt;
use Salman\Mqtt\MqttClass\Mqtt;

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

Route::middleware('auth')->group(function () {
    Route::get('', Dashboard::class)->name('dashboard');
    Route::get('data-suhu', [DataSuhuController::class, 'index'])->name('data-suhu');
    Route::get('data-stok', [DataStokController::class, 'index'])->name('data-stok');
    Route::put('button-set-makan', [StatusMakanController::class, 'button'])->name('status-makan-update');
    Route::get('jadwal-pakan', [JadwalPakanController::class, 'index'])->name('jadwal-pakan');
    Route::post('jadwal-pakan', [JadwalPakanController::class, 'store']);
    Route::put('jadwal-pakan', [JadwalPakanController::class, 'update'])->name('jadwal-pakan-update');
    Route::delete('jadwal-pakan', [JadwalPakanController::class, 'delete'])->name('jadwal-pakan-delete');
    Route::get('setting-profile', [SettingController::class, 'index'])->name('setting');
    Route::post('setting-profile-update', [SettingController::class, 'update'])->name('setting-update');

    Route::post('logout', function () {
        Auth::logout();
        return redirect()->route('login')->with([
            'type' => 'success',
            'message' => 'Berhasil Logout'
        ]);
    })->name('logout');
});

Route::get('login', [LoginController::class, 'index'])->name('login');
Route::post('login', [LoginController::class, 'store']);
Route::get('forgot-password', [ForgotPasswordController::class, 'index'])->name('forgot-password');
Route::post('forgot-password', [ForgotPasswordController::class, 'email_store'])->name('forgot-password');
Route::get('reset-password/{token}', [ForgotPasswordController::class, 'reset_password'])->name('password.reset');
Route::post('reset-password-store', [ForgotPasswordController::class, 'reset_password_store'])->name('password.update');

Route::get('sent-mqtt', function () {
    FacadesMqtt::ConnectAndSubscribe('sentSuhu', function ($topic, $msg) {
        echo "Msg Received: \n";
        echo "Topic: {$topic}\n\n";
        echo "\t$msg\n\n";
    }, 1);
    FacadesMqtt::loop(true);
});
