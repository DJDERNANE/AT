<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Startup extends Authenticatable
{
    use HasFactory;
    protected $fillable = ['logo','token','password','fullname','email','phone','startup', 'creation_date', 'catid','wilaya','label', 'website', 'socialmedia' , 'desc'];

    public function Category(){
        return $this->belongsTo(Category::class);
    }
    public function services(){
        return $this->hasMany(Service::class, 'startupId');
    }
}
