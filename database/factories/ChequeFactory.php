<?php

use Faker\Generator as Faker;
/*
|--------------------------------------------------------------------------
| Cheque Factories
|--------------------------------------------------------------------------
| 
| Definition of how to create a factory model.
|
*/
$factory->define(App\Cheque::class, function (Faker $faker) {
    $dateForPayment = $faker->dateTimeBetween('now', time());
    return [
        'amount' => $faker->randomFloat(2, 500.00, 50000.00),
        'paymentDate' => $dateForPayment,
        'recipientName' => $faker->name
    ];
});
