<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    public function index()
    {
        $msgs = Message::all();
        return view('admin.messages',compact('msgs'));
    }
    public function show($msg)
    {
        $msg = Message::where('id', $msg)->first();
        return view('admin.msg',compact('msg'));
    }
    public function destroy($msg)
    {
        $msg = Message::find($msg);
        $msg->delete();
        return redirect('/msgs');
    }
}
