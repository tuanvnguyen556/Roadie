const express = require('express');

const app = express();


app.get('/', (req, res) =>{
    app.send("home page");
})

app.listen(3000);