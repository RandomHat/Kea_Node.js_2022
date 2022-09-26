async function getPokemon(url = '', data = {}){
    const res = await fetch(url, {method: "GET"}).then(res => res.json()).then(result => console.log(result));
}

getPokemon("http://localhost:8080/pokemon");
