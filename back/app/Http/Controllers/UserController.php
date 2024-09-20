<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Interfaces\UserInterface;
use App\Http\Decorators\UserDecorator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Resources\Json\JsonResource;

// 
class UserController extends Controller implements UserInterface
{
    public static function description(): string | null
    {
        return null;
    }

    public function generate_users(){
        $users = User::factory()->count(10)->create();

        return 'Added 10 random users';
    }

    public function list(Request $request, UserDecorator $userDecorator){
        return UserResource::collection(User::all());
    }

    public function add(Request $request){
        $user = User::where('email', $request->email)->first();

        if(!$user){
            $userData = [
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make('password'),
            ];

            $newUser = User::create($userData);

            return 'ok';
        }else{
            return 'email error';
        }
    }
}
