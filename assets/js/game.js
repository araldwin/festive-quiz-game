/*
The game script
This script is used for the game page.
It uses the data from the db.js file to populate the game page.
It also contains the functions that control the game play.
*/

import { getAttempts, getCurrentQuestion } from "./game-storage.js";
import { displayAttempts, displayQuestion } from "./game-display.js";

runGame();

function runGame() {
  displayAttempts(getAttempts());
  displayQuestion(getCurrentQuestion());
}


