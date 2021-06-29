<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([

    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers\api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');
    Route::put('savePushToken/{user}', 'AuthController@savePushToken');
});

Route::group([
    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers\api',
], function ($router) {
    // Route::get('users', 'AdminController@get_users');
});