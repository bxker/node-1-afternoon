const express = require('express');
const app = express();

//gets all of the products
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')


app.get("/api/products", getProducts)
app.get("/api/product/:id", getProduct)

app.listen(8008, () => {
    console.log("listening on port 8008")
})
