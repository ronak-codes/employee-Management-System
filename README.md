**Employee-Management-System**

This repository has the code for performing CRUD ( Create, Read, Update, Delete ) operation in Employee-Management-System

The data/attributes created in the application are as follow :
  - employeeId ( unique mongoDB ID )
  - firstName  ( string )
  - lastName   ( string )
  - email      ( string )
  - dateOfBirth ( string )
  - department ( string )
  - position   ( string )

------------------------------------------------------------------------------------------------------------------------------------------
**There are 5 endpoints in the backend as listed below**

1)  Endpoint: /employees \
    Method: POST 
    - This endpoint is for creating new employee with necessary details like
    - employeeId, firstName, lastName, email, dateOfBirth, department, position.

2) Endpoint: /employees/:employeeId  \
   Method: GET
   - This endpoint is for retrieving the individual employee details using their employeeId

3) Endpoint: /employees \
   Method: GET
   - This endpoint is for retrieving all the employees

4) Endpoint: /employees/:employeeId \
   Method : PUT
    - This endpoint is for updating the details of an individual employee using their unique employeeId
    
5) Endpoint: /employees/:employeeId \
   Method: DELETE
   - This endpoint is for deleting individual employee based on their employeeId

------------------------------------------------------------------------------------------------------------------------------------------

The CRUD API has many features like:

- These API's are protected using authentication mechanism (JWT)
- The input data is validated before storing it into the database
- Pagination is implemented
- Sorting and Filtering capability is implemented for suitable API
  
------------------------------------------------------------------------------------------------------------------------------------------

**STEPS for Setting Up these Application and Running it**

1) Clone these repository into your local environment 

2) Open terminal and install all the dependency for these project by typing 
   - npm install

3) Create a .env file inside these project at root level 

4) The .env file should contain the following data as key value pair  
   - PORT
   - DATABASE_USERNAME  ( In your mongoDB application inside Database access you can create a user and password for database acccess )
   - DATABASE_PASSWORD
   - ACCESS_TOKEN_SECRET_KEY ( Use any online tool to generate 64bit secret key which will be used for authentication)

5) Inside database/connection.js file replace the  mongoDB connection url  with your own connection string

6) After completing above steps you are ready to run this application by typing 
   - npm run dev or npm run start
   - Note npm run dev will run your application with nodemon utility whereas npm run start will run these application with node

7) You can use tool like Postman to send request to these application for CRUD operation or set up your own frontend for sending request.

-------------------------------------------------------------------------------------------------------------------------------------------------

**Code Structure and Design Decision**

The structure of these backend application is similar to standard structure used in the industry like

  - Route ( Contains routes of these application )
  - controller ( Contains logic for retrieving details from request and interacting with the database )
  - model (Contains schema for employee details )
  - database ( It has logic for creating connection with the database )
  - authentication ( Contains logic for authenticating user and securing API )
  - authentication ( Contains logic for authenticating user and securing API )
  - test ( it has unit test for differnt API )

Design Desicion :
- employeeId is created as a separated field in each document instead of treating _id as employeeId 






   


     
   
