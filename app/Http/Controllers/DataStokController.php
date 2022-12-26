<?php

namespace App\Http\Controllers;

use App\Events\DataStokEvent;
use App\Http\Resources\DataStokResource;
use App\Models\DataStok;
use Illuminate\Http\Request;

class DataStokController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->search;
        $paginate = $request->paginate;
        $datastok = [];
        if ($search == '') {
            $datastok = DataStok::fastPaginate();
        } else {
            $datastok = DataStok::where('tanggal', 'like', '%' . $search . '%')->fastPaginate();
        }
        return inertia('DataStok/DataStok', ['datastok' => DataStokResource::collection($datastok)]);
    }
    public function store(Request $request)
    {
        $datastok = DataStok::create([
            'tanggal' => now()->format('d-m-Y'),
            'jam' => now()->format('h:i:sa'),
            'stok' => $request->stok,
        ]);
        broadcast(new DataStokEvent($datastok))->toOthers();
        return json_encode($datastok);
    }
}
