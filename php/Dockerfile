FROM php:8.1-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd
RUN curl -sS https://getcomposer.org/installer​ | php -- \
     --install-dir=/usr/local/bin --filename=composer
# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN chown -R www-data:www-data /var/www/html

# wrong
#composer install --no-scripts --ignore-platform-reqs --no-dev
# RUN php artisan migrate --seed
# RUN php artisan key:generate 
# RUN php artisan storage:link