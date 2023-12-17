/*
The general script for the all the pages.
Used init bootstrap tooltips, popovers and modals throughout the site.
*/

/*
FIXME: Change to bootstrap modal
const rulesButton = document.getElementById("rulesButton");
const rulesModal = document.getElementById("rulesModal");

rulesButton.addEventListener("click", openModal);

function openModal() {
  rulesModal.style.display = "block";
}
function closeModal() {
  rulesModal.style.display = "none";
}

window.addEventListener("click", (event) => {
  if (event.target === rulesModal) {
    closeModal();
  }
});
*/

import {
  setDifficulty,
  getAvailableTopics,
  setCurrentTopicByName,
} from "./game-storage.js";
import { displayAvailableTopics } from "./game-display.js";

document.addEventListener("DOMContentLoaded", function () {
  // Sound
  const soundWrapper = document.getElementById("sound-wrapper");
  const music = document.getElementById("background-music");

  soundWrapper.addEventListener("click", function () {
    // Toggle between play and pause when the sound icon is clicked
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  });
  // ./Sound

  // Get the difficulty buttons
  const difficultyButtons = document.querySelectorAll(".difficulty-btn");

  // Set the difficulty level in local storage when a button is clicked
  difficultyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Clear local storage before starting a new game
      localStorage.clear();
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
      setCurrentTopicByName(topicName);
      // Redirect to the game page
      window.location.href = "game.html";
    });
  });
});
