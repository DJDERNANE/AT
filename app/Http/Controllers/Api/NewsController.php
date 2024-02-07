<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\News;

class NewsController extends Controller
{
   
    public function index(){
        $news = News::all();
        return response()->json(['success'=> true,'data' => $news]);
    }

 

    public function show($news)
    {
        $news = News::find($news)->first();
        return response()->json(['success'=> true,'data' => $news]);
    }


   
   
}

