<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cheque extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['amount', 'paymentDate', 'recipientName'];
}
