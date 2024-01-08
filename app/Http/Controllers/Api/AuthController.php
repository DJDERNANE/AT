<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Startup;
use Illuminate\Support\Str;   

class AuthController extends Controller
{
    public function store(Request $request)
    {
        
      $imageName=$request->file('logo')->getClientOriginalName();
        $image = $request->file('logo')->storeAs('./startups',$imageName,'pictures');
        $user = Startup::create([
            'fullname' => $request->fullname,
            'email' =>  $request->email,
            'phone' =>  $request->phone,
            'startup' =>  $request->startup,
            'password' =>  Hash::make($request->password),
            'catid' =>  $request->catid,
            'wilaya' =>  $request->wilaya,
            'desc' =>  $request->desc,
            'label' =>  $request->label,
            'creation_date' =>  $request->creation_date,
            'website' =>  $request->website,
            'socialmedia' =>  $request->socialmedia,
            'logo'=> $imageName,
            'token'=> 'djfjfj'
        ]);
        if ($user) { 
          return response()->json(['success'=> true,'user' => 'ok']);
        }
        //if ($request->hasFile('logo')) {
          return response()->json(['success'=> false]);
       // }
        
    }


    public function login(Request $request)
    {
      $request->validate([
        'phone' => 'required',
        'password' => 'required'
      ]);
  
      $user = Startup::where('phone', $request->phone)->first();
      if($user)
      {
        if(Hash::check($request->password, $user->password))
        {
            //$device_token = !empty($request->device_token) ? htmlspecialchars(trim($request->device_token)) : '';
    
            $token = Str::random(100);
            $user->token = $token;
            //$user->device_token = $device_token;
            $user->save();
  
          return response()->json(['success' => true,'user' => $token], 200);
        }
        else
        {
          return response()->json(['success' => false, 'message' => 'Mauvais mot de passe'], 403);
        }
    }}
}
