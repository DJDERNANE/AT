<x-app-layout>
    @section('title')
        {{ 'News' }}
    @endsection
    @section('content')
    <a href="{{route('news.add')}}">
        <button class='byn btn-success p-2 my-2 text-xl'>Ajouter +</button>
    </a>
    
        <table class="table table-striped-columns">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Date</th>
                    <th scope="col">Seting</th>
                </tr>
            </thead>
            <tbody>
            @unless($news)
            <tr>
                <p>Les Categories n'existe pas encore ... </p>
            </tr>
            @else
            @foreach ($news as $item)
                    <tr>
                    <th scope="row">{{$item->id}}</th>
                    <td class='text-xl'>{{$item->title}}</td>
                    <td class='text-xl'>{{$item->desc}}</td>
                    <td class='text-xl'>{{$item->date}}</td>
                    <td>
                        <form method="post" action="{{route('news.destroy', $item->id)}}">
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
