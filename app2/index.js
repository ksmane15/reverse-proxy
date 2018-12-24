const express = require('express')

const app = express()

app.get('/app2/home',(req,res) => {
    console.log(req.path)
    res.send("Hello from app2 home")
})

// app.get()

app.listen(5002,() => {
    console.log('server started..'+5002)
})