<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 09:30:08
 * @LastEditTime: 2019-10-12 13:23:06
 * @LastEditors: Please set LastEditors
 -->
git开头的代码push
特色t
1.$ rm -rf node_modules

<!-- 2.$ yarn config set registry http://registry.cnpmjs.org -->

2.$ npm install --no-bin-links

3.接下来打开 pakage.json 修改【去掉四处 cross-env 】
<!-- #执行 $ npm run watch-poll 或者  -->
4 npm run dev --no-bin-links（我是执行的后者）
--no-bin-links 不要创建软连接  执行安装都加上吧


安装语言包
composer require "overtrue/laravel-lang:~3.0"
config/app.php把
Illuminate\Translation\TranslationServiceProvider::class,
改成
Overtrue\LaravelLang\TranslationServiceProvider::class,

安装验证图片
composer require "mews/captcha:~3.0"
php artisan vendor:publish --provider='Mews\Captcha\CaptchaServiceProvider' 
