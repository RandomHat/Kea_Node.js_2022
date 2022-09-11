const { response } = require("express");
const express = require("express");

// Instantiate the server/library.
const app = express();

// get request example
    // route   // callback function    
app.get('/', (request, response) => {
    response.send({nessage: "Created my first route. Check."});
});

    // endpoint
app.get("/deers", (req, res) => {
    res.send(
        {
            name : "Martin",
        description : "Er en uranhjort!"
    })
});

// Tasks make a cups route

app.get("/cups", (req, res) => {
    res.send(
    {
        make: "Kongeligt Porcelain",
        type: "kaffekop"
    })
})


// ways to send data with GET
// works for all HTTP methods

// 1.
// path variables
// /deers/{id] i spring
// /deers/:id i express

// 2.
// query parameters (query string)
// /deers?key=value&key2=value2

// with path variables

app.get ("/deers/:id", (req, res) => {
    //console.log(req.params)
    if (Number(req.params.id) === 1){
        res.send({
            name: "Bambi",
            theBestAndOGDeer: true
        })
    } else {
        res.send({
            error: "Resource not found",
            id : 404
        })
    }
    
})

// with query string

app.get("/actors/", (req,res) =>{
    console.log(req.query.name)
    res.send({
        message: "Information about actor:",
        ...req.query
    })
}) 


// Set port, and start server. Best practise er at have den her i bunden. Det kan også give problemer at have app.listen() længere oppe i appen.
app.listen(8080, () => {
    console.log("Server is running on port", 8080)
});
