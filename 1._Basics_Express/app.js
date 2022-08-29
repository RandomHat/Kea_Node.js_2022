const express = require("express");

// Instantiate the server.
const app = express();

// set Port
app.listen(8080);

// get request example
app.get('/', (request, response) => {
    response.send({nessage: "Created my first route. Check."});
});