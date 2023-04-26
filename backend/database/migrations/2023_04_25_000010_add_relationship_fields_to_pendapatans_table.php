<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipFieldsToPendapatansTable extends Migration
{
    public function up()
    {
        Schema::table('pendapatans', function (Blueprint $table) {
            $table->unsignedBigInteger('username_id')->nullable();
            $table->foreign('username_id', 'username_fk_8386079')->references('id')->on('users');
        });
    }
}