import express from "express"
import path from "path"

import {renderPage} from "./util/templateEngine.js"; //filesystem. Vi bruger readFileSync som er synkront, det er fint fordi vi kun kører koden ved serverstart.

// Vi kunne sætte port  i miljøet.
const PORT = process.env.PORT || 8080;
const app = express();

// Sæt port i miljøet med PORT=XXXX, som oneliner PORT=8080 node app.js, syntax er anderledes i windows.
//console.log(process);
//console.log(Number(process.env.PORT))



app.use(express.static("public")); //Husk sikkerhedsfeature der ikke tillader implicit serving af filer, derfor skal vi altid beskrive hvor filer vi vil serve ligger.

// SSR sandwich
const frontpage = renderPage("/frontpage/frontpage.html", {tabTitle:"POKEMON HOME", cssLink : '/frontpage/frontpage.css'});

const battle = renderPage("/battle/battle.html", {tabTitle:"%%TAB_TITLE%%", cssLink : '/battle/battle.css'});

const contactpage = renderPage("/contact-page/contact-page.html", {tabTitle: "Provide Feedback", cssLink : '/contact-page/contact-page.css'});

// end

app.get("/", (req, res) => {
    res.send(frontpage);
    //res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"))  
})

app.get("/battle", (req, res) => {
    const randomPokemon = "pikachu";
    res.redirect(`/battle/${randomPokemon}`);
});

app.get("/battle/:pokemonName", (req, res) => {
    res.send(battle.replace("%%TAB_TITLE%%", `Battle ${req.params.pokemonName}`))
    //res.send(battleSandwich.replace("%%TAB_TITLE%%", `Battle ${req.params.pokemonName}`))
    //res.sendFile(path.resolve("public/pages/battle/battle.html"));
});

app.get("/contact", (req,res) => {
    res.send(contactpage)
    //res.sendFile(path.resolve("public", "pages", "contact-page", "contact-page.html"))
})

app.get("/api/pokemon", (req,res) => {
    fetch("https://pokeapi.co/api/v2/pokemon", {method: "GET"}).then(res => res.json()).then(apires => res.send({data: apires.results}))
})

const server = app.listen(PORT, (error) => {
    error?  console.log(error) :
            console.log(`App is running on port`, server.address().port);
});
