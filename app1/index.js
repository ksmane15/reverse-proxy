const express = require('express')

const app = express()

app.get('/app1/home',(req,res) => {
    console.log(req.path)
    res.send("HEllo from app1 home")
})

// app.get()

app.listen(5001,() => {
    console.log('server started..'+5001)
})