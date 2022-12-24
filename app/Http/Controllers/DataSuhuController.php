<?php

namespace App\Http\Controllers;

use App\Models\DataSuhu;
use Illuminate\Http\Request;

class DataSuhuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dataSuhu = DataSuhu::all();
        return $dataSuhu;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $dataSuhu = DataSuhu::create([
            'tanggal' => now()->format('d-m-Y'),
            'jam' => now()->format('H:i:sa'),
            'temperature' => $request->temperature,
            'humidity' => $request->humidity,
        ]);
        return json_encode($dataSuhu);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DataSuhu  $dataSuhu
     * @return \Illuminate\Http\Response
     */
    public function show(DataSuhu $dataSuhu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DataSuhu  $dataSuhu
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DataSuhu $dataSuhu)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DataSuhu  $dataSuhu
     * @return \Illuminate\Http\Response
     */
    public function destroy(DataSuhu $dataSuhu)
    {
        //
    }
}
