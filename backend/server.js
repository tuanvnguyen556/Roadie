require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json()); // if anty requests come in, parse json data from request body and attatch to request object
app.use((req, res, next) => {
    console.log(`${req.path}, ${req.method}`); // log the path and method of each request
    next(); // move on to the next middleware
})

app.get('/', (req, res) => {
    res.send("this is the home page");
    console.log("home page");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});