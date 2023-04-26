<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipFieldsToTambahTagihansTable extends Migration
{
    public function up()
    {
        Schema::table('tambah_tagihans', function (Blueprint $table) {
            $table->unsignedBigInteger('username_id')->nullable();
            $table->foreign('username_id', 'username_fk_8385134')->references('id')->on('users');
        });
    }
}