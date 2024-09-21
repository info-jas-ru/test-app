<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/description', [UserController::class, 'description']);
Route::get('/users', [UserController::class, 'list']);
Route::get('/generate_users', [UserController::class, 'generate_users']);
Route::post('/add', [UserController::class, 'add']);
