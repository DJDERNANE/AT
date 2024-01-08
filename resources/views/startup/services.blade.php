@extends('layouts.appstartup')
@section('title')
        {{ 'service' }}
    @endsection
    @section('content')
    <a href="{{route('services.add',$startup->token)}}">
        <button class='byn btn-success p-2 my-2 text-xl'>Ajouter +</button>
    </a>
    
        <table class="table table-striped-columns">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">service Name</th>
                    <th scope="col">picture</th>
                    <th scope="col">Seting</th>
                </tr>
            </thead>
            <tbody>
            @unless($services)
            <tr>
                <p>Les serviceegories n'existe pas encore ... </p>
            </tr>
            @else
            @foreach ($services as $service)
                    <tr>
                    <th scope="row">{{$service->id}}</th>
                    <td class='text-xl'>{{$service->service_name}}</td>
                    <td class='text-xl'><img style="width: 200px" src='http://localhost:8000/pictures/services/{{$service->picture}}'/></td>
                    <td>
                        <form method="post" action="{{route('services.destroy',[$service->id,$startup->token])}}">
                            @csrf
                            @method('DELETE')
                            <input type="submit" class="btn btn-danger" value="Delete">
                        </form>
                    </td>
                </tr>
            @endforeach
@endunless

            </tbody>
        </table>
    @endsection
