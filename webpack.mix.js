/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 09:30:09
 * @LastEditTime: 2019-10-12 09:30:09
 * @LastEditors: your name
 */
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css').version();
