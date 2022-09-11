const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send({message: "Welcome to the root of the weapons API"});
});

app.get('/weapons', (req, res) => {
    res.send(weapons)
})

app.get('/weapons/:id', (req, res) => {
    let id = req.params.id;
    if (weapons[id]){
        res.send(weapons[id])
    } else {
        res.send({message : "item not found"})
    }
})

/*
app.get('/weapons/types', (req,res) => {

    res.send()
})
*/

// Gik lidt i analysis paralysis, så jeg endte med at lave hvad jeg tænkte kunne være et MVP..

// Data
const weapons = {
    axe : {
        id : "axe",
        description : "Chops wood and heads"
    },
    sword : {
        id : "sword",
        description: "Slashes and thrusts"
    },
    spear: {
        id: "spear",
        description: "Stick 'em with the pointy end"
    },
    bow : {
        id : "bow",
        description: "Lob some arrows at them"
    }
}

app.listen(8080, () => {
    console.log("App is running on port:", 8080)
})