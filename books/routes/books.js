const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.get('', async (req, res)=>{
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error");
    }
});

router.post('', async (req,res)=>{
    let { title, author, numberPages, publisher } = req.body;
    try {
        book = new Book({
            title,
            author,
            numberPages,
            publisher
        })
        await book.save();
        res.json("Books Posted Successfully");

    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error")
    }
});
router.get('/:id', async (req,res)=>{
    try {
        const book = await Book.findById(req.params.id);
        if(book){
            res.status(200).json(book);
        }
        res.status(404).json("Books doesn't exist against this ID.");
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error");
        
    }
});

module.exports = router;