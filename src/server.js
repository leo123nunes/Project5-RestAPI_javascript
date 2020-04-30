const port = 3003

const database = require('./database')

const express = require('express')

const app = express()

app.get('/products', (req,resp,next) => {
    resp.send(database.getProducts())
})

app.get('/products/:id', (req,resp,next)=>{
    resp.send(database.getProduct(req.param.id))
})

app.post('/products',(req,resp,next)=>{
    const product = database.saveProduct({
        type: req.body.type,
        price: req.body.price,
        name: req.body.name
    })
    resp.psend(product)
})

app.listen(port,() => {
    console.log(`Server running at port ${port}...`)
})