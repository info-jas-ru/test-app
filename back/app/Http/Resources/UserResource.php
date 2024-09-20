<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Controllers\UserController;
use App\Http\Decorators\UserDecorator;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            // 'description' => $this->description,
            'description' => UserDecorator::description(),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
