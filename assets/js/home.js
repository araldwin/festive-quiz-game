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
  // Get the difficulty buttons
  const difficultyButtons = document.querySelectorAll(".difficulty-btn");

  // Set the difficulty level in local storage when a button is clicked
  difficultyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const difficulty = button.dataset.difficulty;
      setDifficulty(difficulty);
    });
  });


  playButton.addEventListener("click", () => {
    const difficulty = playButton.dataset.difficulty;

    setDifficulty(difficulty);
    setCurrentQuestion();
    setProgress(0);
    window.location.href = "game.html";
  });
});
