<x-app-layout>
    @section('title')
        {{ $startup->name }}
    @endsection
    @section('content')
   <h1> {{ $startup->startup }}  Startup</h1>
    
        <table class="table table-striped-columns">
            <thead>
                <tr>
                    <th scope="col">Nom </th>
                    <td scope="col">{{$startup->fullname}}</td>
                </tr>
                <tr>
                    <th scope="col">Email </th>
                    <td scope="col">{{$startup->email}}</td>
                </tr>
                <tr>
                    <th scope="col">Numero Telephone </th>
                    <td scope="col">{{$startup->phone}}</td>
                </tr>
                <tr>
                    <th scope="col">Startup </th>
                    <td scope="col">{{$startup->startup}}</td>
                </tr>
                <tr>
                    <th scope="col">Wilaya </th>
                    <td scope="col">{{$startup->wilaya}}</td>
                </tr>
                <tr>
                    <th scope="col">Description </th>
                    <td scope="col">{{$startup->desc}}</td>
                </tr>
                <tr>
                    <th scope="col">Label </th>
                    <td scope="col">{{$startup->label}}</td>
                </tr>
                <tr>
                    <th scope="col">Date de Creation </th>
                    <td scope="col">{{$startup->creation_date}}</td>
                </tr>
                <tr>
                    <th scope="col">Site Web </th>
                    <td scope="col">{{$startup->website}}</td>
                </tr>
                <tr>
                    <th scope="col">Date de Creation </th>
                    <td scope="col">{{$startup->creation_date}}</td>
                </tr>
                <tr>
                    <th scope="col">Social Media </th>
                    <td scope="col">{{$startup->socialmedia}}</td>
                </tr>
            </thead>
          
        </table>
    @endsection
</x-app-layout>
