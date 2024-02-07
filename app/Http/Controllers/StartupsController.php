<?php

namespace App\Http\Controllers;

use App\Models\Startup;
use Illuminate\Http\Request;

class StartupsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $startups = Startup::all();
        return view('admin.startups', compact('startups'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Startup  $startup
     * @return \Illuminate\Http\Response
     */
    public function show(Startup $startup){
        $startup = Startup::find($startup)->first();
        return view('admin.show', compact('startup'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Startup  $startup
     * @return \Illuminate\Http\Response
     */
    public function edit(Startup $startup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Startup  $startup
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Startup $startup)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Startup  $startup
     * @return \Illuminate\Http\Response
     */
    public function destroy($startup)
    {
        $startup = Startup::find($startup);
        $startup->delete();
        return redirect('/startups');
    }
    public function activate($startup)
    {
        $startup = Startup::find($startup);
        $startup->valid = true;
        $startup->save();
        return redirect('/startups');
    }
    public function desactivate($startup)
    {
        $startup = Startup::find($startup);
        $startup->valid = false;
        $startup->save();
        return redirect('/startups');
    }
}
