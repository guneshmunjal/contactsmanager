// connect to the app


 const express = require("express");
 const app = express();

 // we need the instance of morgan

 const morgan = require('morgan');
 app.use(morgan('dev'));

 // load config from env file
 require("dotenv").config();

 // find out the port

 const PORT =  process.env.PORT;

 // we need to add the middleware

 app.use(express.json());

 // start the server

 app.listen(PORT,()=>{
    console.log(`the server has started on port ${process.env.PORT}`);
 })

// connnect to the database

   const dbconnect = require("./config/database");
   dbconnect();

   // import the  routes

   const createContacts = require("./routes/Routes");
       app.use("/app/v1",createContacts);

// default routes

 app.get("/", ()=>{

     res.send("the  app  is runnnig successfully");
 
 });