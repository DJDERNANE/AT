<x-app-layout>
    @section('title')
        {{'Dashboard'}}
    @endsection
    @section('styling')
       <style>
            .welcome img{
                height: 60vh;
                width: 60%;
                margin: 20px auto
            }
            

       </style>
    @endsection
    @section('content')
        <div class="welcome">
            <h1>Welcome To Your Dashbord</h1>
           <img src='logostartup.png' alt='logo'/>
        </div>
    @endsection
</x-app-layout>
