// webpack.mix.js

let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
mix.styles(['resources/css/swiper-bundle.min.css','resources/css/app.css'], 'public/css/app.css');
