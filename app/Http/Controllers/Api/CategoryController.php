<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function getCategories(){
        $cats = Category::all();
        foreach ($cats as $cat) {
            $name = $cat->name;
            $picture = $cat->picture;
            $startups = $cat->Startups()->where('valid', true)->count();

            $res[]= [
                'category'=> $name,
                'startups'=> $startups,
                'picture'=> $picture
            ];
        }
       
        return response()->json(['success'=>true, 'categories'=> $res]);
    }
}
