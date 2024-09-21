<?php

namespace App\Http\Decorators;

use App\Http\Interfaces\UserInterface;

class UserDecorator implements UserInterface
{
    protected UserInterface $model;

    public function __construct(UserInterface $model)
    {
        $this->model = $model;
    }

    public static function description(): array
    {
        $num = rand(1, 4);
        $stack = array();

        $arr_desc=['php', 'js', 'golang', 'java'];

        for($i=1; $i<=$num; $i++){
            array_push($stack, $arr_desc[array_rand($arr_desc)]);
        }
        $stack = array_unique($stack);
        
        return $stack;
    }
}