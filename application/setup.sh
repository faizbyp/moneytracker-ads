#!/bin/sh
composer install
php artisan key:generate
php artisan storage:link