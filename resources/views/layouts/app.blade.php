<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Responsive Admin &amp; Dashboard Template based on Bootstrap 5">
    <meta name="author" content="AdminKit">
    <meta name="keywords"
        content="adminkit, bootstrap, bootstrap 5, admin, dashboard, template, responsive, css, sass, html, theme, front-end, ui kit, web">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="shortcut icon" href="{{ asset('adminFiles/img/icons/icon-48x48.png') }}" />

    <title>@yield('title')</title>

    {{-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> --}}

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ asset('vendor/bootstrap/css/bootstrap.min.css') }}">

    <link href="{{ asset('adminFiles/css/app.css') }}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">

    <!-- selectpicker bootstrap CSS -->
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">

    <!-- custom css -->
    <link rel="stylesheet" href="{{ asset('adminFiles/css/custom.css') }}">

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="{{ asset('vendor/bootstrap/js/bootstrap.min.js') }}"></script>

    {{-- dzayer js --}}
    <script src="{{ asset('vendor/dzayer/dzayer.js') }}"></script>

    <!-- selectpicker bootstrap js -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <link rel="stylesheet" type="text/css" href="https://npmcdn.com/flatpickr/dist/themes/material_blue.css">
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <script src="https://npmcdn.com/flatpickr/dist/l10n/fr.js"></script>
    @yield('styling')
</head>

<body class="font-sans antialiased">
    <div class="min-h-screen bg-gray-100">
        @include('layouts.navigation')



        <!-- Page Content -->
        <main>

            <div class="wrapper">
                <nav id="sidebar" class="sidebar">
                    <div class="sidebar-content js-simplebar">


                        <ul class="sidebar-nav">
                            <li class="sidebar-header" style="font-size: 18px;">
                                <a href="{{route('dashboard')}}">
                                    <span>
                                        Dashboard
                                    </span>
                                </a>

                            </li>
                            <li class="sidebar-header" style="font-size: 18px;">
                                <a href="{{route('cats')}}">
                                    <span>
                                        Categories
                                    </span>
                                </a>

                            </li>
                            <li class="sidebar-header" style="font-size: 18px;">
                                <a href="{{route('startups')}}">
                                    <span>
                                        Startups
                                    </span>
                                </a>

                            </li>

                            <li class="sidebar-header" style="font-size: 18px;">
                                <a href="{{route('news')}}">
                                    <span>
                                        News
                                    </span>
                                </a>

                            </li>
                            <li class="sidebar-header" style="font-size: 18px;">
                                <a href="{{route('msgs')}}">
                                    <span>
                                        Messages
                                    </span>
                                </a>

                            </li>
                          
                        </ul>
                    </div>
                </nav>

                <div class="main">
                    <nav class="navbar navbar-expand navbar-light navbar-bg">
                        <a class="sidebar-toggle d-flex">
                            <i class="hamburger align-self-center"></i>
                        </a>
                    </nav>

                    <main class="content">
                        <div class="container-fluid p-0">
                            @yield('content')
                            <div class="test"></div>
                        </div>
                    </main>


                </div>
            </div>

            <script src="{{ asset('adminFiles/js/app.js') }}"></script>

        </main>
    </div>
</body>

</html>
