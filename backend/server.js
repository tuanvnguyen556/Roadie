const express = require('express');

const app = express();


app.get('/', (req, res) =>{
    res.send("this is the home page");
    console.log("home page");
})

app.listen(3000);