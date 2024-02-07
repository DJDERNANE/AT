<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        
        $msg = Message::create([
            'name' => $request->name,
            'email' =>  $request->email,
            'phone' =>  $request->phone,
            'msg'=>$request->msg
        ]);
        if ($msg) { 
          return response()->json(['success'=> true,'msg' => 'ok']);
        }
       
          return response()->json(['success'=> false]);
        
    }

    public function getAll()
    {
        $msgs = Message::all();
        return response()->json(['success'=> true,'data' => $msgs]);
    }
}
