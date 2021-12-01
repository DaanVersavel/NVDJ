const express = require('express')
const cookieParser = require('cookie-parser')
//setup express app
const app = express()

// let’s you use the cookieParser in your application
app.use(cookieParser());
app.get('/getcookie', (req, res) => {
    res.cookie(`Cookie token name`,`encrypted cookie string Value`);
    res.send('Cookie have been saved successfully');
});
app.get('/getcookie', (req, res) => {
    //show the saved cookies
    console.log(req.cookies)
    res.send(req.cookies);
});