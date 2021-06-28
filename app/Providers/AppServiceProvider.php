<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
      \Illuminate\Support\Facades\Schema::defaultStringLength(191);
      if(!User::first()) {
          $user = new User;
          $user->name = 'admin';
          $user->email = 'admin@ed.com';
          $user->password = Hash::make('password');
          $user->role = 0;
          $user->save();
      }
    }
}
