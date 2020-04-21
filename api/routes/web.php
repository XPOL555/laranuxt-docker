<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Carbon\Carbon;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return file_get_contents(public_path('app/index.html'));
});
Route::get('/_nuxt/{any}', function ($any) {
    return redirect('/app/_nuxt/' . $any, 302, [], true);
})->where('any','(.*)');

Route::get('test', function () {
    /*$e = \App\Employee::with(['contracts' => function ($query){
        if(true){
            $query->whereNull('end')
                ->orWhere('end', '>=', Carbon::now());
        }
    }])->find(1);*/
    app('graphqliteCache')->clear();
    return '';
});