<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

/**
 * Class AuthController
 * @package App\Http\Controllers\Api
 */
class AuthController extends Controller {

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout() {

        if (Auth::check()) {
            Auth::user()->AauthAcessToken()->delete();
            return response()->json(['logged_out' => true]);
        }
        return response()->json(['logged_out' => false]);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function me() {
        return response()->json(auth()->user());
    }

}
