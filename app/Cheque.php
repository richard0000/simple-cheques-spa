<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Searchable;

class Cheque extends Model
{
    use Searchable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['amount', 'paymentDate', 'recipientName'];

    /**
     * Searchable fields
     *
     */
    protected $search_bindings = ['recipientName'];

}
