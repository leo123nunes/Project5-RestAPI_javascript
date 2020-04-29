const port = 3003

const express = require('express')

const app = express()

app.get('/products', (req,resp,next) => {
    resp.send({name: "Book", price: 60, title: "The History of the World"})
})

app.listen(port,() => {
    console.log(`Server running at port ${port}...`)
})