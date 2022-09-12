let score;

let playerOne;
let playerTwo;

export function initializePlayers(playerOneIn, playerTwoIn){
    playerOne = playerOneIn;
    playerTwo = playerTwoIn;
}

export function initializeScore(scoreIn = 301){
    score = scoreIn;
}

export function initializeGame(){
    console.log(playerOne, playerTwo)
    console.log("Game starts with score...", score);
}

export default {}