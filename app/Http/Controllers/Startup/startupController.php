<?php

namespace App\Http\Controllers\Startup;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Startup;
use App\Models\Service;
use App\Http\Controllers\Startup\serviceController;
use Illuminate\Support\Facades\Auth;


class startupController extends Controller
{
    public function index($startupId){
        $startup = Startup::where('token',$startupId)->first();
        Auth::login($startup);
        return view('startup.dashboard', compact('startup'));
        //return $startupId;
    }

    public function show($startupId){
        $startup = Startup::where('token',$startupId)->first();
        Auth::login($startup);
        return view('startup.show', compact('startup'));
        //return Auth::user()->fullname;
    }

    public function services($startupId){
        $startup = Startup::where('token',$startupId)->first();
        Auth::login($startup);
        $services = Service::where('startupId',$startup->id)->get();
        return view('startup.services', compact(['services','startup']));
    }
}
