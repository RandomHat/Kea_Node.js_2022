// const express = require("express"); // without a specific path, require looks up the name in node_modules
import express from "express";
const app =  express();

import path from "path"

// En fordel ved at bruge modul syntax på backend er at det øger code reuse -> vi kan genbruge filer fra backend på frontend. 

// __dirname does not work with type module syntax
//console.log(__dirname); // node's pwd, dunder dunder


// Can't do this ever.. must be read as a file
//import packageJSON from "./package.json"
//console.log(packageJSON)
// can't use this anymore in module type syntax
//console.log(require("./package.json"));

import {incrementVisitorCounter} from "./geocitiesUtil.js"
//const {incrementVisitorCounter} = require("./geocitiesUtil") // N

// define public files, so we have control over what the client can access. Safety feature, so that the client isn't allowed to fuckup the server.
// if no namespace is defined the public folder is defined by the root aka localhost:8080/frontpage.html
app.use(express.static("public"));
// a namespace can be defined with a string:
// app.use("/static", express.static("public"));
// localhost:8080/static/frontpage.html

// set favicon
app.use("/favicon.ico", express.static("~/public/images/dart.ico"))

//Vi filer  med sendFile
app.get('/', (req, res) => {
    console.log("Visitors since the server started", incrementVisitorCounter())
    res.sendFile(path.resolve("./public/frontpage/frontpage.html"))
    //__dirname only works in commonJS
    //res.sendFile(__dirname + "/public/frontpage/frontpage.html")
});

app.listen(8080, () => console.log("Server is running on", 8080))