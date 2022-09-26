import express from "express"
import path from "path"

// Vi kunne sætte port  i miljøet.
const PORT = 8080;
const app = express();

// Sæt port i miljøet med PORT=XXXX, som oneliner PORT=8080 node app.js, syntax er anderledes i windows.
console.log(process);
console.log(Number(process.env.PORT))

//app.use(express.static("public")); //Husk sikkerhedsfeature der ikke tillader implicit serving af filer, derfor skal vi altid beskrive hvor filer vi vil serve ligger.

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage/frontpage.html"))  
})

app.get("/frontpage/frontpage.js", (req, res) => {
    res.sendFile(path.resolve("public/frontpage/frontpage.html"))
})

app.get("/pokemon", (req,res) => {
    res.send({data:["Slowpoke"]})
})


app.listen(PORT, (error) => {
    error?  console.log(error) :
            console.log(`App is running on port ${PORT}`);
});

console.log("It works??");