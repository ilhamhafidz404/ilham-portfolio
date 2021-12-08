// webpack.mix.js

let mix = require("laravel-mix");

// mix.sass("resources/sass/app.scss", "css").setPublicPath("public");
mix.css("resources/css/tailwind.css", "css").setPublicPath("public");
mix.js("resources/js/alphine.js", "js").setPublicPath("public");
