import express from "express";

const app = express();

// built-in middleware for parsing json. Makes express auto- parse and stringify.
app.use(express.json());

// maybe refactor to util.js
//  =====
function wrapResponse(obj){return {data: obj}};

function handleIDs(arr){
    for (let i; i < arr.length; i++){
        if(arr[i]){
            arr[i].id = i;
        }
    }
}

const default404 = {code: 404, message: "Sorry, the resouce was not found"};
//  =====

const weapons = [
    {   
        id: 0,
        name: "Spoon",
        description: "an extremely inefficient weapon"
    },
    {   
        id: 1,
        name: "Chainsaw",
        description: "goes splat. Brr. BRRRRRRRR!"
    },
    {
        id: 2,
        name: "Bladed glove",
        description: "Sticks and stones may break my bones, but nothing will ever kill ME!"
    }
];

app.get("/weapons", (req, res) => {
    res.send(wrapResponse(weapons));
})

app.get("/weapons/:id", (req, res) => {
    let id = req.params.id;

    res.send(weapons[id]? wrapResponse(weapons[id]) : default404);
})

app.post("/weapons", (req, res) => {
    // Assign predefined properties
    let body = req.body;
    let weapon = {id: null, name: body.name, description: body.description}

    // Add weapon to end of array and get id.
    let id = weapons.push(weapon) - 1;
    weapons[id].id = id;

    res.send(wrapResponse(weapons[id]));
})

app.put("/weapons/:id", (req, res) => {
    let id = req.params.id;
    let weapon = weapons[id]? weapons[id] : false;

    if(weapon){
        weapon.name = req.body.name;
        weapon.description = req.body.description;
    }
    
    res.send(weapon? wrapResponse(weapons[id]) : default404)
})

app.patch("/weapons/:id", (req, res) => {
    let id = req.params.id;
    let weapon = weapons[id]? weapons[id] : false;

    if(weapon){
        for (let [key, value] of Object.entries(req.body)){
            if (weapon[key]){ // Only existing entries can be modified, otherwise remove if-check.
                weapon[key] = value;
            }
        }
        res.send(wrapResponse(weapons[id]));
    } 
    else {
        res.send(default404)
    }
})

app.delete("/weapons/:id", (req,res) => {
    let id = req.params.id;

    res.send(weapons[id]? wrapResponse(weapons.splice(id, 1, undefined)[0]) : default404)
})

app.listen(8080, () => console.log("Server started on port:", 8080));