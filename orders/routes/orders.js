const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');
const mongoose = require('mongoose');
const axios = require('axios');

router.get('', async (req, res)=>{
    try {
        const order = await Order.find();
        res.json(order);
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error");
    }
});

router.post('', async (req,res)=>{
    try {
        order = new Order({
            CustomerID : mongoose.Types.ObjectId(req.body.CustomerID) ,
            BookID : mongoose.Types.ObjectId(req.body.BookID),
            deliveryDate : req.body.deliveryDate
        })
        await order.save();
        res.json("Order Created Successfully");

    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error")
    }
});
router.get('/:id', async (req,res)=>{
    try {
        const order = await Order.findById(req.params.id);
        if(order){
            let orderBookData = await axios.get('http://localhost:5000/api/books/'+ order.BookID);
            let orderCustomerData = await axios.get('http://localhost:3200/api/customers/'+ order.CustomerID);
            let orderStack = { Book_Title : orderBookData.data.title, Customer_Name: orderCustomerData.data.name}
            res.status(200).json(orderStack);
          

        }else{
            res.status(404).json("Order doesn't exist against this ID.");
        }
    
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error");
        
    }
});

module.exports = router;