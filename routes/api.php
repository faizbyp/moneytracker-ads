<?php
//Register
Route::post('register', 'Api\\AuthController@register');

//Login
Route::post('login', 'Api\\AuthController@login');

Route::group(['prefix' => 'v1', 'as' => 'api.', 'namespace' => 'Api\V1\Admin', 'middleware' => ['auth:sanctum']], function () {
    // Roles
    Route::apiResource('roles', 'RolesApiController');

    // Users
    Route::apiResource('users', 'UsersApiController');

    // Tambah Tagihan
    Route::apiResource('tambah-tagihans', 'TambahTagihanApiController');

    // Pendapatan
    Route::apiResource('pendapatans', 'PendapatanApiController');

    // Pengeluaran
    Route::apiResource('pengeluarans', 'PengeluaranApiController');

});

