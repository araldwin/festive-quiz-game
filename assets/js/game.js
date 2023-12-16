/*
The game script
This script is used for the game page.
It uses the data from the db.js file to populate the game page.
It also contains the functions that control the game play.
*/

import { setDifficulty, getAttempts } from "./game-storage.js";
import { DATA } from "./db.js";

runGame();

function runGame() {
  displayAttempts(getAttempts());
}



/**
 * Display the number of attempts in the game, based on the difficulty level.
 */
function displayAttempts(attemptsNumber) {
  for (let i = 0; i < attemptsNumber; i++) {
    const attempt = document.createElement("i");
    attempt.classList.add("fa-solid", "fa-cookie-bite", "fa-xl", "fa-beat");
    attempt.style.color = "#af6d02";
    document.getElementById("attempts").appendChild(attempt);
  }
}
