<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;
class NewsController extends Controller
{
    public function index(){
        $news = News::all();
        return view('admin.news', compact('news'));
    }

    public function create()
    {
        return view('admin.add_news');
    }

    public function store(Request $request)
    {
      if($request->hasFile('picture')){
        $imageName = $request->file('picture')->getClientOriginalName();
        $image = $request->file('picture')->storeAs('./news',$imageName,'pictures');
         News::create([
                'title'=> $request->title,
                'image_path'=> $imageName,
                'desc'=> $request->desc,
                'date'=> $request->date,
            ]);
            return redirect('/news');
      }
            
           
    }
    public function destroy($news)
    {
        $news = News::find($news);
        $news->delete();
         return redirect('/news');
    }
}
