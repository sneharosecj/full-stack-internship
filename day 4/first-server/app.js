// console.log("Welcome to the server side")

// console.log(__dirname)
// console.log(__filename)

// // Core module - os
// const os = require('os')
// console.log(os.platform())
// console.log(os.version())

// //Local module - math.js
// const {add,subtract} = require('./math')
// let sum = add(20,30)
// console.log(`Sum is ${sum}`)

const express = require('express')
const products = require('./products')
const Product = require('./models/productSchema')

const mongoose = require('mongoose')
require('dotenv').config()
console.log(process.env.MONGODBURL)
const dbUrl = process.env.MONGODBURL

async function main(){
    await mongoose.connect(dbUrl)
}

main()
.then(()=> console.log("DB connected"))
.catch(err=> console.log(err))

const app = express()
const port = 3000
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("From my first server")
})

app.get('/hello',(req,res)=>{
    res.send("Hello")
})

// get all products
app.get('/products',(req,res)=>{
    res.status(200).json(products)
})

//get single product
app.get('/products/:id',(req,res)=>{
    try {
        const productID = parseInt(req.params.id)
       const product = products.find(prod=> prod.id===productID)
       if(!product){
            return res.status(404).json({Error:'Product not found'})
       }
       res.status(200).json(product)
    } catch (error) {
        console.error(error)
        res.status(500).json({Error: error.message})
    }


})

//create product
app.post('/products',async(req,res)=>{

try {
    const {name,price,description,image} = req.body

    const product = new Product({name,price,description,image
    })
    await product.save()
    res.status(201).json({message:"Product added", data:product})
} catch (error) {
    console.error(error)
      res.status(500).json({Error: error.message})
}

})

app.listen(port,()=>{
    console.log("Server has started...")
})