#!/bin/sh
docker-compose up -d --build
docker-compose exec php sh /var/www/html/setup.sh
docker-compose exec php php artisan migrate --seed