<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index()
    {
        return inertia('Login');
    }
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|min:6',
            'password' => 'required|alpha_num|min:6|confirmed',
        ]);
        // dd($request->all());
        if (Auth::attempt($request->only('email', 'password'))) {
            session()->regenerate();
            return redirect()->route('dashboard')->with([
                'type' => 'success',
                'message' => 'Berhasil Login'
            ]);
        }
    }
}
