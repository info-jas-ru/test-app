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

    public static function description(): string
    {
        $arr_desc=['php', 'js', 'golang', 'java'];
        return $arr_desc[array_rand($arr_desc)];
    }
}