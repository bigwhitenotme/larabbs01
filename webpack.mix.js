/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 09:30:09
 * @LastEditTime: 2019-10-12 09:30:09
 * @LastEditors: your name
 */

const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .version()
    .copyDirectory('resources/editor/js', 'public/js')
    .copyDirectory('resources/editor/css', 'public/css');
