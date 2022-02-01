# CrudProject-Sequelize-Node-MySql

do npm install

download Xampp , and run apache(port 8080) and mysql(port 3306) and open localhost:8080/phpmyadmin/

npm run start:dev

user table will be created in xampp

Now in postman , u can play with the requests at port where u started the server

Example : for POST -> http://localhost:4000/users/

in body -> raw -> {
"email":"pg@gmail.com",
"title":"title",
"password":"pppppp",
"confirmPassword":"pppppp",
"role":"User",
"firstName":"Anonymous",
"lastName":"Unknown"
}

User will be created

for GET -> http://localhost:4000/users/1 -> will get the user with id=1;
