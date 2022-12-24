<?php

namespace App\Http\Controllers;

use App\Models\JadwaPakan;
use App\Models\StatusMakan;
use Illuminate\Http\Request;

class Response extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $jadwal = JadwaPakan::get()->take(3);
        $jam = now()->format('H:i');
        $StatusMakan = StatusMakan::find(1);
        foreach ($jadwal as $item) {
            if ($item->jam == now()->format('H:i')) {
                $StatusMakan->update(['status' => 'high']);
                return json_encode([
                    'status_makan' => $StatusMakan
                ]);
            }
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
