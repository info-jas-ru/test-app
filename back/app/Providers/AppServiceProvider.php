<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Http\Interfaces\UserInterface;
use App\Http\Decorators\UserDecorator;
use App\Http\Controllers\UserController;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(UserInterface::class, UserController::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        
    }
}
