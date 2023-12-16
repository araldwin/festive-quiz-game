/*
The home page script.
This script is used for the game page.
*/

import {
  setDifficulty,
  setCurrentQuestion,
  setProgress,
} from "./game-storage.js";

document.addEventListener("DOMContentLoaded", function () {
  // Set the difficulty level when the play button is clicked.
  const playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", () => {
    const difficulty = playButton.dataset.difficulty;

    setDifficulty(difficulty);
    setCurrentQuestion();
    setProgress(0);
    window.location.href = "game.html";
  });
});
