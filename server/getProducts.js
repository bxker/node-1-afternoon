const products = require('./products.json')

const getProducts = (req, res, next) => {
    var price = req.query.price;
    if(price >= price){
        console.log(products.price)
        var priceFilter = products.filter(item => item.price >= +price)
        res.json(priceFilter)
    }else {
        res.json(priceFilter)
    }
}


module.exports = getProducts
