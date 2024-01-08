<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Startup;

class StartupController extends Controller
{
    public function getStartups(){
        $startups = Startup::all();
        return response()->json(['success'=>true, 'startups'=> $startups]);
    }
    public function getStartupinfo($id){
        $startup = Startup::where('id',$id)->with('services')->first();

        return response()->json(['success'=>true, 'startup'=> $startup]);
    }
}
