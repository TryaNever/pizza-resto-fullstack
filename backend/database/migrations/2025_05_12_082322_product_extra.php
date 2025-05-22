<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('product_extra', function (Blueprint $table) {
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->foreignId('extra_id')->constrained('extras')->onDelete('cascade');
            $table->primary(['product_id', 'extra_id']);
        });
    }
    public function down()
    {
        Schema::dropIfExists('product_extra');
    }
};
