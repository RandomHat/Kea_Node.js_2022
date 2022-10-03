// async function getPokemon(url = '', data = {}){
//     const res = await fetch(url, {method: "GET"}).then(res => res.json()).then(result => console.log(result));
// }

// async function getPokemonAPI(url = '', data = {}){
//     const res = await fetch(url, {method: "GET"}).then(res => res.json()).then(result => console.log(result));
// }

//getPokemon("http://localhost:8080/pokemon");

//getPokemonAPI("https://pokeapi.co/api/v2/pokemon");

//const pokemonDiv = document.querySelector("#pokemons") //traverser 3 træer, så er ineffectiv
const pokemonDiv = document.getElementById("pokemon");

// https://pokeapi.co/api/v2/pokemon now routing from own server
// fetch("/api/pokemon")
// .then(res => res.json())
// .then(result => {
//     result.data.forEach((pokemon) => {
//         let pokeP = document.createElement("p");
//         pokeP.innerText = `${pokemon.name}`
//         pokemonDiv.appendChild(pokeP);
//     })
// })

fetch("/api/pokemon")
.then(response => response.json())
.then(result => {
    console.log(result)
    result.data.forEach(pokemon => {
        const pokemonIndividualDiv = document.createElement("div");        
        const pokemonNameP = document.createElement("p");
        pokemonNameP.innerText = pokemon.name;

        const battleLink = document.createElement("a");
        battleLink.setAttribute("href", `/battle`);
        const battleButton = document.createElement("button");
        battleButton.textContent = `Battle ${pokemon.name}!`;
        battleLink.appendChild(battleButton);

        pokemonIndividualDiv.appendChild(pokemonNameP);
        pokemonDiv.appendChild(pokemonIndividualDiv);
        pokemonDiv.appendChild(battleLink);
    });
});

// Task write code here that takes the user to /battle after 3 seconds

//redirection exercise
// setTimeout(() => { 
//     // Den globale context er window. eg. window.location.href -> men ligesom med setTimeout kan window udelades.
//     location.replace("battle")
//     //location.assign("battle") virker som href
//     //location.href="/battle"
// }, 3000)