# Backeend of money Tracker

## Run Backend Locally

Clone the repo locally:

```sh
git clone https://github.com/faizbyp/moneytracker-ads.git money_tracker
cd money_tracker/backend
```

Install PHP dependencies:

```sh
composer install
```
Alternative ways use 
```sh
composer install --ignore-platform-reqs
```
or
```sh
composer update --ignore-platform-reqs
```

Setup configuration:

```sh
cp .env.example .env
```

Edit .env and set your database connection details. 

```sh
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ads 
DB_USERNAME=root
DB_PASSWORD=
```
<i><b>Note: Dont forget to start your mysql DBMS</b></i>

Run database migrations:
- sometimes when migrate, the db isnt automatically created  so you need to create db manually

```sh
php artisan migrate --seed
```
Generate application key:

```sh
php artisan key:generate
```

Run storage link app:

```sh
php artisan storage:link
```

Run the dev server (the output will give the address):

```sh
php artisan serve
```

Visit the url addr in your browser, and login with or register:
* Roles: Admin
- **Username:** admin@gmail.com
- **Password:** password
* Rolse: User
- **Username:** test@gmail.com
- **Password:** password
