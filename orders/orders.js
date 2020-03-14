//express package required to create server
const express = require('express');

//body-parser required to get access to the client body
const bodyParser = require('body-parser');

//importing Database methods Custom library 
const connectDB = require('./database/db');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const ordersRoute = require('./routes/orders');

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

app.use('/api/orders', ordersRoute);

const port = process.env.port || 3500;
app.listen(port,()=>console.log(`server is running on port ${port}`));