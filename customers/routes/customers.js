const express = require('express');
const router = express.Router();
const Customer = require('../models/Customers');

router.get('', async (req, res)=>{
    try {
        const customer = await Customer.find();
        res.json(customer);
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error");
    }
});

router.post('', async (req,res)=>{
    let { name, age, address } = req.body;
    try {
        customer = new Customer({
            name,
            age,
            address
        })
        await customer.save();
        res.json("Customer Posted Successfully");

    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error")
    }
});
router.get('/:id', async (req,res)=>{
    try {
        const customer = await Customer.findById(req.params.id);
        if(customer){
            res.status(200).json(customer);
        }
        res.status(404).json("Customer doesn't exist against this ID.");
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error");
        
    }
});

module.exports = router;