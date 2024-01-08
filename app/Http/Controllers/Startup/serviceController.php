<?php

namespace App\Http\Controllers\Startup;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Startup;
use App\Models\Service;
use Illuminate\Support\Facades\Auth;    

class serviceController extends Controller
{
    public function create($startupId){
        $startup = Startup::where('token',$startupId)->first();
        Auth::login($startup);
        return view('startup.addService', compact('startup'));
    }
    public function store(Request $request,$startupId){
        $startup = Startup::where('token',$startupId)->first();
    
        if ($startup && $request->hasFile('picture')) {
            Auth::login($startup);
            $imageName = $request->file('picture')->getClientOriginalName();
            $image = $request->file('picture')->storeAs('./services',$imageName,'pictures');
            $service = Service::create([
                'service_name' => $request->service_name,
                'desc' => $request->desc,
                'picture' => $imageName,
                'startupId' => $startup->id,
            ]);
       
        }


       return redirect(route('services.startup',$startupId));
    }
    public function destroy(Service $serviceId,$startupId){
        $startup = Startup::where('token',$startupId)->first();
        
        $serviceId->delete();
        return redirect(route('services.startup',$startupId));
    }
}
