<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{
    public function run()
    {
        $permissions = [
            [
                'id'    => 1,
                'title' => 'user_management_access',
            ],
            [
                'id'    => 2,
                'title' => 'permission_create',
            ],
            [
                'id'    => 3,
                'title' => 'permission_edit',
            ],
            [
                'id'    => 4,
                'title' => 'permission_show',
            ],
            [
                'id'    => 5,
                'title' => 'permission_delete',
            ],
            [
                'id'    => 6,
                'title' => 'permission_access',
            ],
            [
                'id'    => 7,
                'title' => 'role_create',
            ],
            [
                'id'    => 8,
                'title' => 'role_edit',
            ],
            [
                'id'    => 9,
                'title' => 'role_show',
            ],
            [
                'id'    => 10,
                'title' => 'role_delete',
            ],
            [
                'id'    => 11,
                'title' => 'role_access',
            ],
            [
                'id'    => 12,
                'title' => 'user_create',
            ],
            [
                'id'    => 13,
                'title' => 'user_edit',
            ],
            [
                'id'    => 14,
                'title' => 'user_show',
            ],
            [
                'id'    => 15,
                'title' => 'user_delete',
            ],
            [
                'id'    => 16,
                'title' => 'user_access',
            ],
            [
                'id'    => 17,
                'title' => 'tagihan_management_access',
            ],
            [
                'id'    => 18,
                'title' => 'tambah_tagihan_create',
            ],
            [
                'id'    => 19,
                'title' => 'tambah_tagihan_edit',
            ],
            [
                'id'    => 20,
                'title' => 'tambah_tagihan_show',
            ],
            [
                'id'    => 21,
                'title' => 'tambah_tagihan_delete',
            ],
            [
                'id'    => 22,
                'title' => 'tambah_tagihan_access',
            ],
            [
                'id'    => 23,
                'title' => 'transaksi_management_access',
            ],
            [
                'id'    => 24,
                'title' => 'pendapatan_create',
            ],
            [
                'id'    => 25,
                'title' => 'pendapatan_edit',
            ],
            [
                'id'    => 26,
                'title' => 'pendapatan_show',
            ],
            [
                'id'    => 27,
                'title' => 'pendapatan_delete',
            ],
            [
                'id'    => 28,
                'title' => 'pendapatan_access',
            ],
            [
                'id'    => 29,
                'title' => 'pengeluaran_create',
            ],
            [
                'id'    => 30,
                'title' => 'pengeluaran_edit',
            ],
            [
                'id'    => 31,
                'title' => 'pengeluaran_show',
            ],
            [
                'id'    => 32,
                'title' => 'pengeluaran_delete',
            ],
            [
                'id'    => 33,
                'title' => 'pengeluaran_access',
            ],
            [
                'id'    => 34,
                'title' => 'profile_password_edit',
            ],
        ];

        Permission::insert($permissions);
    }
}