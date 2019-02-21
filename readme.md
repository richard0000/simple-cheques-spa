# Simple Cheques App

A Laravel / VueJs Simple Page Application to manage a simple CRUD for a "Cheque" Model with only three attributes. A great way to begin with Laravel / VueJs SPA's.

## Getting Started

This project is a starting point for a Laravel / VueJs App. It uses Laravel 5.7, VueJs 2.5, Bootstrap 4

A few resources to get you started if this is your first Laravel / VueJs project:

- [Homestead](https://laravel.com/docs/5.7/homestead)
- [Tutorial (Coming Soon)](http://)

## Steps to build locally

To get this project working properly in very simple steps, I recommend to use [Laravel Homestead](https://laravel.com/docs/5.7/homestead), because it's a perfect choice to left behind all the packages and necessary tools needed for every Laravel / VueJs application. It omes with everything you need.
Besides, here are the official steps to see this project working on your local environment:

- Open a command line of your choice
- Clone this repository locally in a directory of your choice.
- Enter in the new created directory
- Run `composer install`
- Create a database and grant access for the project in `.env` file
- Run `php artisan migrate --seed` to create the database structure with initial fake data
- Run `php artisan serve`. Then the backend (REST api) is going to be running in http://localhost:8080
- In a separated command line instance, run `npm install`
- In this second command line instance, run `npm run watch` (or `npm run dev`). Now the  application will be runnning in http://localhost:8080

*Voilá!* you have this pretty simple app now running in your local, enjoy!

> Author: [Richard Gamarra](https://www.linkedin.com/in/ricardo-gamarra).