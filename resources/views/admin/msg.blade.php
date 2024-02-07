<x-app-layout>
    @section('title')
        {{ 'Message' }}
    @endsection
    @section('content')
    
       <div style="font-size: 20px">
            From : <b>{{$msg->name}}</b> <br>
            Email: <b>{{$msg->email}}</b>  <br>
            Phone:  <b>{{$msg->phone}}</b> <br>
            <h3 style="margin-top: 20px">
                {{$msg->msg}}
            </h3>
       </div>
    @endsection

</x-app-layout>
