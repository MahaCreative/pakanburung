<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;

class ForgotPasswordController extends Controller
{
    public function index()
    {
        return inertia('Auth/ForgotPassword');
    }

    public function email_store(Request $request)
    {
        // dd($request->email);
        $attr = $request->validate(['email' => 'required', 'email']);
        $user = User::where('email', $request->email)->first();

        if ($user) {
            $status = Password::sendResetLink($request->only('email'));

            return $status === Password::RESET_LINK_SENT
                ? back()->with(['status' => __($status), 'message' => 'Berhasil Reset Password', 'type' => 'success'])
                : back()->withErrors(['email' => __($status)]);
        }
    }
    public function reset_password($token)
    {
        return inertia('Auth/ResetPassword', ['token' => $token]);
    }

    public function reset_password_store(Request $request)
    {
        // dd($request->all());
        // dd($request->token);
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);


        $status = Password::reset(
            $request->only('email', 'password', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => bcrypt($password)
                ])->setRememberToken(\Str::random(60));

                $user->save();
                event(new PasswordReset($user));
            }
        );

        Auth::attempt($request->only('email', 'password'));

        return $status === Password::PASSWORD_RESET
            ? redirect()->route('dashboard')->with(['status', __($status), 'message' => 'Berhasil Reset Password', 'type' => 'success'])
            : back()->withErrors(['email' => [__($status)]]);
    }
}
