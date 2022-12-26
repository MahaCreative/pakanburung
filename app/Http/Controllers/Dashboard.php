<?php

namespace App\Http\Controllers;

use App\Models\DataStok;
use App\Models\DataSuhu;
use App\Models\StatusMakan;
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
        $status = StatusMakan::latest()->get()->take(1);
        $stok = DataStok::latest()->get()->take(1);
        // dd($stok);
        // dd($status[0]->status);
        $jam = now()->format('H:i:sa');
        return inertia('Dashboard', ["suhu" => $dataSuhu, 'status' => $status, 'stok' => $stok]);
    }
}
