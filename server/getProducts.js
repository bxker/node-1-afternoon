const products = require('./products.json')

const getProducts = (req, res, next) => {
    if(req.query.price){
        const priceFilter = products.filter(item => item.price >= +req.query.price)
        res.json(priceFilter)
    }else {
        res.json(products)
    }
}


module.exports = getProducts;
