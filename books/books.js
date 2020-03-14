//express package required to create server
const express = require('express');

//body-parser required to get access to the client body
const bodyParser = require('body-parser');

//importing Database methods Custom library 
const connectDB = require('./database/db');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const booksRoute = require('./routes/books');

connectDB();
///setting headers access protocols
app.use( (req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept ");
    res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS");
      next();
    }
    );

app.get('/',(req,res)=>res.send("API is running"));

app.use('/api/books', booksRoute);

const port = process.env.port || 5000;
app.listen(port,()=>console.log(`server is running on port ${port}`));