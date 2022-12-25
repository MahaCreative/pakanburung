<?php

namespace App\Http\Controllers;

use App\Models\JadwaPakan as Jadwal;
use Illuminate\Http\Request;

class JadwalPakanController extends Controller
{
    public function index()
    {
        $jadwalPakan = Jadwal::latest()->get();
        return inertia('JadwalPakan/JadwalPakan', ['jadwal_pakan' => $jadwalPakan]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'jadwal' => 'required'
        ]);
        $jadwalPakan = Jadwal::create([
            'jam' => $request->jadwal
        ]);
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Menambahkan Data'
        ]);
    }
    public function update(Request $request)
    {
        $id = $request->id;
        $jadwal = Jadwal::findOrFail($id);
        $jadwal->update(['jam' => $request->jadwal]);
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Mengedit Data'
        ]);
    }
    public function delete(Request $request)
    {
        $id = $request->id;
        $jadwal = Jadwal::findOrFail($id);
        $jadwal->delete();
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Menghapus Data'
        ]);
    }
}
