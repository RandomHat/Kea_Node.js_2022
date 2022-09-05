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

// Set port, and start server. Best practise er at have den her i bunden. Det kan også give problemer at have app.listen() længere oppe i appen.
app.listen(8080, () => {
    console.log("Server is running on port", 8080)
});