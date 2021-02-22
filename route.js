const express = require('express');
const Book = require('./Model/book');
const router = express.Router();


router.get("/books",async (req,res)=>{
    const book = await Book.find();
    res.send(book);
});

router.post("/books",async (req,res)=>{

    const book = new Book({
        name:req.body.name,
        qty:req.body.qty
        
    });
    await book.save();
    res.send(book);
});

// router.put("/books",async (req,res)=>{
    
// });

router.delete("/books/:id",async(req,res)=>{

    try {
        await Book.deleteOne({_id:req.params.id}); 
        res.send("Delete successfully");
        
    } catch (error) {
        res.status(404).send({error:"Book not find"});
    }

});


module.exports = router; 