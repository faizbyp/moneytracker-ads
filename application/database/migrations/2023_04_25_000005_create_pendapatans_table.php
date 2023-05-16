<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePendapatansTable extends Migration
{
    public function up()
    {
        Schema::create('pendapatans', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->decimal('amount', 15, 2)->nullable();
            $table->date('entry_date')->nullable();
            $table->string('akun');
            $table->string('kategori');
            $table->string('description')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}