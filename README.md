fourSale
========

RESTful Location-Based Home-For-Sale Agent Web Application -- CMPE275 term project group1

The steps of running our application locally:
1. set up express:

npm update -g express

2. set up mongoDB
navigate to where you keep MongoDB and type:

mongod --dbpath nodetest1\data

In mongo console:

use nodetest1

3. navigate to where the program is:

npm start

4. Using browser to visit our homepage
http://localhost:3000/
Create a new user:
http://localhost:3000/newuser
Create a new home:
http://localhost:3000/newhome
