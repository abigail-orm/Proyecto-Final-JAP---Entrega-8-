const express = require("express");
const app = express();
const port = 5500;

app.get("/", (req, res) => {
    res.sendFile('./index.html',  {root: __dirname })
});

app.get("/buy", (req, res) => {
    res.json(require(`./emercado-api-main/cart//buy.json`))
});

app.get("/cat", (req, res) => {
    res.json(require(`./emercado-api-main/cats/cat.json`))
});

app.get("/cat/:cat_id", (req, res) => {
    const cat_id = req.params.cat_id
    try {
        res.json(require(`./emercado-api-main/cats_products/${cat_id}.json`))
    } catch (error) {
        res.send("Id de categoria incorrecto")
    }
    
});

app.get("/products/:product_id", (req, res) => {
    const product_id = req.params.product_id
    try {
        res.json(require(`./emercado-api-main/products/${product_id}.json`))
    } catch (error) {
        res.send("Id de producto incorrecto")
    }
});

app.get("/product_comment/:product_comment_id", (req, res) => {
    const product_comment_id = req.params.product_comment_id
    try {
        res.json(require(`./emercado-api-main/products_comments/${product_comment_id}.json`))
    } catch (error) {
        res.send("Comentario de producto incorrecto")
    }
});

app.get("/sell", (req, res) => {
    res.json(require(`./emercado-api-main/sell/publish.json`))
});

app.get("/cart", (req, res) => {
    res.json(require(`./emercado-api-main/user_cart/25801.json`))
});

app.listen(port, () => {
    console.log('funciona')
})
