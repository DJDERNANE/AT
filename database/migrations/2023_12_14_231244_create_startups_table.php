<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('startups', function (Blueprint $table) {
            $table->id();
            $table->string('fullname');
            $table->boolean('valid')->default(false);
            $table->string('email');
            $table->string('phone');
            $table->string('startup');
            $table->string('password');
            $table->unsignedBigInteger('catid');
            $table->string('wilaya');
            $table->string('desc', 1000);
            $table->string('label');
            $table->string('creation_date');
            $table->string('website');
            $table->string('socialmedia');
            $table->string('logo');
            $table->string('token');
            $table->foreign('catid')->references('id')->on('categories');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('startups');
    }
};
