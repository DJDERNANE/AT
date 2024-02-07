<x-app-layout>
    @section('title')
        {{ 'messages' }}
    @endsection
    @section('content')

        <table class="table table-striped-columns">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">From  </th>
                    <th scope="col">Email  </th>
                    <th scope="col">Date  </th>
                    <th scope="col">Seting</th>
                </tr>
            </thead>
            <tbody>
            @unless($msgs)
            <tr>
                <p>Les msgegories n'existe pas encore ... </p>
            </tr>
            @else
            @foreach ($msgs as $msg)
                    <tr>
                    <th scope="row">{{$msg->id}}</th>
                    <td class='text-xl'>{{$msg->name}}</td>
                    <td class='text-xl'>{{$msg->email}}</td>
                    <td class='text-xl'>{{$msg->created_at}}</td>
                    <td>
                        <a href="{{route('msgs.show', $msg->id)}}">
                            <button type="button" class="btn btn-primary">View</button>
                        </a>
                        <form method="post" action="{{route('msgs.destroy', $msg->id)}}">
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
