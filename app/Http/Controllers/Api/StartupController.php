<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Startup;
use App\Models\Service;

class StartupController extends Controller
{
    public function getStartups(){
        $startups = Startup::where('valid', true)->get();
        return response()->json(['success'=>true, 'startups'=> $startups]);
    }
    public function getStartupinfo($id){
        $startup = Startup::where('id',$id)->where('valid', true)->with('services')->first();

        return response()->json(['success'=>true, 'startup'=> $startup]);
    }

    public function getStartupsCategories($catId){

        $startups = Startup::where('catid',$catId)->where('valid', true)->get();
        return response()->json(['success'=>true, 'startups'=> $startups]);
    }

    public function getServices($id){
        $services = Service::where('startupId',$id)->get();
        return response()->json(['success'=>true, 'services'=> $services]);
    }
}
