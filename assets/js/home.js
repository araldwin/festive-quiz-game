/*
The home page script.
This script is used for the game page.
*/

import {
  setDifficulty,
  getAvailableTopics,
  setCurrentTopic,
} from "./game-storage.js";
import { displayAvailableTopics } from "./game-display.js";

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

  displayAvailableTopics(getAvailableTopics());

  // Get the topic buttons
  const topicButtons = document.querySelectorAll(".topicBtn");

  // Set the topic in local storage when a button is clicked
  topicButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const topicName = button.dataset.topic;
      setCurrentTopic(topicName);
      // Redirect to the game page
      window.location.href = "game.html";
    });
  });

});
