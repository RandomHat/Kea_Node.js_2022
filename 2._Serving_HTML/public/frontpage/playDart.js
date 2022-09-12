import {initializeScore, initializePlayers, initializeGame} from "./dartGame.js"

// På client side kan vi bruge import/export syntax

initializeScore(501);
initializePlayers("Simon", "Silke");

initializeGame();

// Task: without touhing dartGame and playDarts solve the problem that I don't see anything in the browser.