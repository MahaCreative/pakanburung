<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index()
    {
        return inertia('Setting/Setting');
    }
    public function update(Request $request)
    {
        $user = User::findOrFail($request->id);

        $attr = $request->validate([
            'name' => ['required', 'min:6', 'unique:users,name', 'alpha_num'],
            'email' => ['required', 'email'],
            'password' => ['required', 'confirmed', 'min:6', 'alpha_num'],
        ]);

        $user->update($attr);
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Mengubah Data'
        ]);
    }
}
