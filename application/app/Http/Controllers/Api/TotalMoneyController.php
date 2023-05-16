<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pendapatan;
use App\Models\Pengeluaran;

class TotalMoneyController extends Controller
{
    public function totalMoney($usernameId)
    {
        // Get the total pendapatan amount for the given usernameId
        $totalPendapatan = Pendapatan::where('username_id', $usernameId)->sum('amount');

        // Get the total pengeluaran amount for the given usernameId
        $totalPengeluaran = Pengeluaran::where('username_id', $usernameId)->sum('amount');

        // Calculate the total money (pendapatan - pengeluaran)
        $totalMoney = $totalPendapatan - $totalPengeluaran;

        return response()->json([
            'totalMoney' => $totalMoney,
        ]);
    }
    
    public function totalMoneyAccount($akun, $usernameId)
    {
        // Get the total pendapatan amount for the given usernameId and akun
        $totalPendapatan = Pendapatan::where('akun', $akun)
            ->where('username_id', $usernameId)
            ->sum('amount');

        // Get the total pengeluaran amount for the given usernameId and akun
        $totalPengeluaran = Pengeluaran::where('akun', $akun)
            ->where('username_id', $usernameId)
            ->sum('amount');

        // Calculate the total money (pendapatan - pengeluaran)
        $totalMoney = $totalPendapatan - $totalPengeluaran;

        return response()->json([
            'totalMoney' => $totalMoney,
        ]);
    }
}