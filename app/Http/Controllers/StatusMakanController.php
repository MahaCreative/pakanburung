<?php

namespace App\Http\Controllers;

use App\Events\StatusMakanSent;
use App\Jobs\SentMqtt;
use App\Models\StatusMakan;
use Illuminate\Http\Request;
use Salman\Mqtt\MqttClass\Mqtt;

class StatusMakanController extends Controller
{
    public function button(Request $request)
    {
        // dd($request->status);
        $status = StatusMakan::find(1);
        $status->update(['status' => 'aktif']);
        // dd($status);
        dispatch(new SentMqtt($status->status));
        broadcast(new StatusMakanSent($status))->toOthers();
    }
}
