<?php

namespace App\Http\Controllers;

use App\Events\StatusMakanSent;
use App\Models\StatusMakan;
use Illuminate\Http\Request;
use Salman\Mqtt\MqttClass\Mqtt;

class StatusMakanController extends Controller
{
    public function button(Request $request)
    {

        $status = StatusMakan::find(1);
        $status->update(['status' => $request->status]);
        broadcast(new StatusMakanSent($status))->toOthers();
        $mqtt = new Mqtt();

        $output = $mqtt->ConnectAndPublish('sentSuhu', $status);

        if ($output === true) {
            return "published";
        }

        return "Failed";
    }
}
