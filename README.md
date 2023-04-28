# Money Tracker Backend

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
Alternative ways use (in case errors exist)
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
And now the setup is complete!


## Admin Dashboard 

* Visit the url addr in your browser, and login with or register:

**Roles: Admin**
- **Username:** admin@gmail.com
- **Password:** password

**Roles: User**
- **Username:** test@gmail.com
- **Password:** password
<br><img src="./documents/images/login-page.png" width="500">

* Admin dashboard preview:
<br><img src="./documents/images/admin-dashboard.png" width="500">



## How to Use Generated API
### Step by step to use API
1. To generate the API of the application, you first need to log in or register for an account. endpoints:
 - login: **/api/login**
 - register: **/api/register**

2. Once you're logged in, you will receive an access token that looks like this:
![image](./documents/images/api-login.png)

3. When making a request, add your token to the authorization header. If you're using Postman, you can do it like this:
![image](./documents/images/authorization.png)

4. Now, you can make any API requests that exist in the application. Checkout: [API endpoints](#API-endpoints)
![image](./documents/images/connected-api.png)

5. For more information on generating a token, you can refer to:
[Generate token for Laravel sanctum](https://blog.quickadminpanel.com/quickadminpanel-api-generator-with-laravel-sanctum/)

### API endpoints
Default URL endpoints for all CRUDs are /api/v1/[crud_name]. As the application generate all API Resourceful Controller methods, so these URLs applicable.

* GET /api/v1/users - get the list of users
* POST /api/v1/users - create new user
* GET /api/v1/users/1 - get the user with users.id = 1
* PUT /api/v1/users/1 - update the user with users.id = 1
* DELETE /api/v1/users/1 - delete the user with users.id = 1

To access other features of the application, you can use the same API as described earlier, with different [crud_name] refers to its feature.

**Cruds: pendapatans**
* GET /api/v1/pendapatans 
* POST /api/v1/pendapatans 
* GET /api/v1/pendapatans/1 
* PUT /api/v1/pendapatans/1 
* DELETE /api/v1/pendapatans/1 

**Cruds: pengeluarans**
* GET /api/v1/pengeluarans 
* POST /api/v1/pengeluarans 
* GET /api/v1/pengeluarans/1 
* PUT /api/v1/pengeluarans/1 
* DELETE /api/v1/pengeluarans/1

**Cruds: tambah-tagihans**
* GET /api/v1/tambah-tagihans 
* POST /api/v1/tambah-tagihans 
* GET /api/v1/tambah-tagihans/1 
* PUT /api/v1/tambah-tagihans/1 
* DELETE /api/v1/tambah-tagihans/1

### API-related code/script
The API related file that maybe you need to know are located in:

API route handler: [./routes/api.php](./routes/api.php)

API controllers: 
- each cruds: [./app/Http/Controllers/Api/V1/Admin](./app/Http/Controllers/Api/V1/Admin)
- auth controller (login and register): [./app/Http/Controllers/Api/AuthController.php](./app/Http/Controllers/Api/AuthController.php)

API requests for some methods: [./app/Http/Requests/](./app/Http/Requests/)

API resources: [./app/Http/Resources/Admin/](./app/Http/Resources/Admin/)

For more information, please refer to this refference: [API generator](https://helpdocs.quickadminpanel.com/create-panel/api-generator)