<x-app-layout>
    @section('title')
        {{ 'Startups' }}
    @endsection
    @section('content')
        <table class="table table-striped-columns">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Startup Name</th>
                    <th scope="col">Founder</th>
                    <th scope="col">Seting</th>
                </tr>
            </thead>
            <tbody>
            @if(empty($startups))
            <tr>
                <p>Les Startups n'existe pas encore ... </p>
            </tr>
            @else
            @foreach ($startups as $startup)
                    <tr>
                    <th scope="row">{{$startup->id}}</th>
                    <td class='text-xl'>{{$startup->startup}}</td>
                    <td class='text-xl'>{{$startup->fullname}}</td>
                    <td>
                        <a href="{{route('startups.show', $startup->id)}}">
                            <button type="button" class="btn btn-primary">Voir Plus</button>
                        </a>
                        <form method="post" action="{{route('startups.destroy', $startup->id)}}">
                            @csrf
                            @method('DELETE')
                            <input type="submit" class="btn btn-danger" value="Delete">
                        </form>
                    </td>
                </tr>
            @endforeach
@endif

            </tbody>
        </table>
    @endsection

</x-app-layout>
