<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;
class AuthController extends Controller
{
public function register(Request $request)
{
// On vérifie que les données sont valides
$validator = Validator::make($request->all(), [
'lastname' => 'required|string|max:255',
'firstname' => 'required|string|max:255',
'email' => 'required|string|email|max:255|unique:users',
'password' => 'required|string|min:8',
]);


if ($validator->fails()) {
return response()->json($validator->errors(), 422);
}
// On crée l'utilisateur
$user = User::create([
'first_name' => $request->firstname,
'last_name' => $request->lastname,
'email' => $request->email,
'password' => Hash::make($request->password), // toujours hasher les mots de passe !
]);
// On génère un token pour l'utilisateur
$token = JWTAuth::fromUser($user);
return response()->json([
'message' => 'Utilisateur créé !',
'user' => $user,
'token' => $token,
], 201);
}
public function signin(Request $request)
{
$credentials = $request->only('email', 'password');
// On vérifie les identifiants
if (!$token = JWTAuth::attempt($credentials)) {
return response()->json(['error' => 'Identifiants invalides'], 401);
}
return response()->json([
'message' => 'Connexion réussie',
'token' => $token,
]);
}
public function me()
{
$user = JWTAuth::parseToken()->authenticate();
return response()->json($user);
}
}
