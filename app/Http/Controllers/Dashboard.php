<?php

namespace App\Http\Controllers;

use App\Models\DataSuhu;
use Illuminate\Http\Request;

class Dashboard extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $dataSuhu = DataSuhu::latest()->get()->take(1);

        $jam = now()->format('H:i:sa');
        return inertia('Dashboard', ["suhu" => $dataSuhu,]);
    }
}
