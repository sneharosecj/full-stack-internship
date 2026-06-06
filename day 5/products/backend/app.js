const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/productschema');

const app = express();

app.use(express.json());
app.use(cors());

// access env values
require('dotenv').config();

// connect to mongodb
const dbURL = process.env.MONGODBURL;

async function main() {
    await mongoose.connect(dbURL);
}

main()
    .then(() => console.log("Db connected..."))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send("Hello");
});

// CREATE PRODUCT
app.post('/products', async (req, res) => {
    try {
        const { name, price, description, image } = req.body;

        const product = new Product({
            name,
            price,
            description,
            image
        });

        await product.save();

        res.status(201).json({
            message: "Product added",
            data: product
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error.message
        });
    }
});

// GET ALL PRODUCTS
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            message: "products data received",
            data: products
        });

    }catch (error) {
        console.error(error);
        res.status(500).json({
            error: error.message
        });
    }
});

app.patch('/products/:id',async(req,res)=>{
    try {
        const productId= req.params.id
        const product = await Product.findByIdAndUpdate(productId,req.body,{new:true})
        res.status(200).json({message:"Product updated",updatedProduct:product})
    }
catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});
    }

});




app.delete('/products/:id',async(req,res)=>{
    try{
        const productId=req.params.id
        const product = await Product.findByIdAndDelete(productId)
        if(!product){
            return res.status(400).json({message:"Product not found"})
        }
        else{
            res.status(200).json({message:"Product deleted"})
        }
    }catch (error) {
          console.log(error)
          res.status(500).json({error:error.message})
    }
}

)


app.get('./products/:id',async(req,res)=>{
    try{
        const productId= req.params.id
        const product = await Product.findById(productId) 
        res.status(200).json({message:"Product found",product:product})
    }catch (error){
        console.log(error)
        res.status(500).json({error:error.message})
    }

})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is started...");
});
