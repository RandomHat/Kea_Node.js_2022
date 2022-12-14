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
// /deers/{id} i spring
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

app.get("/actors", (req,res) =>{
    console.log(req.query.name)
    res.send({
        message: "Information about actor:",
        ...req.query
    })
}) 

// console.log(Date.now())
// console.log(new Date())
// console.log(new Date().toLocaleString())

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] us week starts Sunday.

app.get("/time", (req, res) => {
    let date = new Date();
    
    res.send({data: {day: date.getDay(), month: date.getMonth()}})
})

app.post("/actors", (req, res) => {
    console.log(req.body)
    res.send({data: req.body})
})

app.get("/lookunderthebed", (req,res) => {
    /* assignment allow the user to define if they have a flashlight
    if they do then send the response "You are safe"
    if they don't then redirect them to /monsters
    */

    Boolean(req.query.flashlight) === true?
        res.send({message: "you are safe"}) :
        res.redirect("/monsters"); // Server side redirect
})

app.get("/monsters", (req,res) => {
    res.send({message : "Uh oh! Scary monsters!!!"})
})

// Set port, and start server. Best practise er at have den her i bunden. Det kan ogs?? give problemer at have app.listen() l??ngere oppe i appen.
app.listen(8080, () => {
    console.log("Server is running on port", 8080)
});
