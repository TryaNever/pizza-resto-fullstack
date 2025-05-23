<?php
namespace App\Models;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Foundation\Auth\User as Authenticatable;
class User extends Authenticatable implements JWTSubject
{
protected $fillable = [
'last_name',
'first_name',
'email',
'password',
];
// Obligatoire pour JWT
public function getJWTIdentifier()
{
return $this->getKey();
}
public function getJWTCustomClaims()
{
return [];
}
}
