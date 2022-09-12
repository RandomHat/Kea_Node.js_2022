import express from "express";

const app = express();

// 
app.use(express.json());

const weapons = [
    {name: "AK-47"},
    {name: "knife"}
]

app.get("/weapons", (req, res) => {
    res.send({data: weapons});
})

app.listen(8080, () => console.log("Server started on port:", 8080));