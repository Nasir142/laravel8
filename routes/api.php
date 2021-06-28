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
    Route::post('me', 'AuthController@me');
    Route::put('savePushToken/{user}', 'AuthController@savePushToken');
});

Route::group([
    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers\api',
], function ($router) {
    Route::get('users', 'AdminController@get_users');
    Route::post('pdf_upload', 'AdminController@pdf_upload');
    Route::post('get_documents/{user}', 'AdminController@get_documents');
    Route::post('get_completed_documents/{user}', 'AdminController@get_completed_documents');
    Route::post('get_unfinished_documents/{user}', 'AdminController@get_unfinished_documents');
    Route::post('pdf_work_completd', 'UsersController@completedpdfFiletoserver');
    Route::post('pdf_work_save', 'UsersController@savepdfFiletoserver');
    Route::put('edit_user/{user}', 'UsersController@edit_user');
    Route::get('getNotifications', 'UsersController@getNotifications');
    Route::post('clearNotifications', 'UsersController@clearNotifications');
});