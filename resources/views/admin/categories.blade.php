<x-app-layout>
    @section('title')
        {{ 'cat' }}
    @endsection
    @section('content')
    <a href="{{route('cats.add')}}">
        <button class='byn btn-success p-2 my-2 text-xl'>Ajouter +</button>
    </a>
    
        <table class="table table-striped-columns">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">category Name</th>
                    <th scope="col">Seting</th>
                </tr>
            </thead>
            <tbody>
            @unless($cats)
            <tr>
                <p>Les Categories n'existe pas encore ... </p>
            </tr>
            @else
            @foreach ($cats as $cat)
                    <tr>
                    <th scope="row">{{$cat->id}}</th>
                    <td class='text-xl'>{{$cat->name}}</td>
                    <td>
                        <a href="{{route('cats.edit', $cat->id)}}">
                            <button type="button" class="btn btn-primary">Edit</button>
                        </a>
                        <form method="post" action="{{route('cats.destroy', $cat->id)}}">
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

</x-app-layout>
