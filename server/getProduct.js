const products = require('./products.json')

let getProduct = (req, res, next) => {
    const product = products.find(item => item.id === +req.params.id)
    if(!product){
        res.status(500).json("Item not in list")
    }else {
        res.json(product)
    }
}

module.exports = getProduct;