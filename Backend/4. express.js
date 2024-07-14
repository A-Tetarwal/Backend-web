/* 
 * Express js framework
 * introduction to Express js
 * Setting up a basic Express application
 * Routing.
 * Middleware
 * Request and response handling
 * Error handling
*/

/*
 * pehle require express
 * phir app.use vgera setup krna pdega
 * routes creation
 * listen krna hai
*/ 

/** 
 * EXPRESS JS is a framework 
 * Manages everyhing from recieving the request and giving the response
*/

const express = require('express')
const app = express()

// middleware here
app.use((req, res, next) => {
    console.log("middleware here");
    next();
});

// app.get(route, reqestHandler)
app.get("/", function(req, res) {
    res.send("Hello world");
})
app.get("/profile", function(req, res) {
    res.send("Ye dekh kaha aaya hai");
})

// error handle chalega
app.get("/about", function(req, res, next) {
    return next(new Error("something went wrong"));
})

//  error handling
app.use((err, req,res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

// isse server chalta hai
app.listen(3000)