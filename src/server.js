const port = 3003

const database = require('./database')

const bodyParser = require('body-parser')

const express = require('express')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/products', (req,resp,next) => {
    resp.send(database.getProducts())
})

app.get('/products/:id', (req,resp,next)=>{
    resp.send(database.getProduct(req.params.id))
})

app.delete('/products/:id',(req,resp,next)=>{
    const produto = database.delProduct(req.params.id)
    resp.send(produto)
})

app.post('/products',(req,resp,next)=>{
    const product = database.saveProduct({
        type: req.body.type,
        price: req.body.price,
        name: req.body.name
    })
    resp.send(product)
})

app.put('/products/:id',(req,resp,next)=>{
    const product = database.saveProduct({
        id: req.params.id,
        type: req.body.type,
        price: req.body.price,
        name: req.body.name
    })
    resp.send(product)
})

app.listen(port,() => {
    console.log(`Server running at port ${port}...`)
})