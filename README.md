fourSale
========

RESTful Location-Based Home-For-Sale Agent Web Application -- CMPE275 term project group1

The steps of running our application locally


1. set up express:

  ```
  npm update -g express
  ```

2. set up mongoDB

  navigate to where you keep MongoDB and type:

  ```
  mongod --dbpath nodetest1\data
  ```

3. In mongo console:

  ```
  use nodetest1
  ```

4. navigate to where the program is:

  ```
  npm start
  ```

5. Using browser to visit our webpages:

  Home page:

  http://localhost:3000/

  Create a new user:

  http://localhost:3000/newuser

  Create a new home:

  http://localhost:3000/newhome
