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
  const music = document.getElementById("background-music");
  const soundWrapper = document.getElementById("sound-wrapper");

  soundWrapper.innerHTML = `<i class="fas fa-l fa-volume-mute" style="color: #17bf07;"></i>`;

  soundWrapper.addEventListener("click", function () {
    // Toggle between play and pause when the sound icon is clicked
    if (music.paused) {
      soundWrapper.innerHTML = `<i class="fas fa-l fa-volume-up" style="color: #17bf07;"></i>`;
      music.play();
    } else {
      soundWrapper.innerHTML = `<i class="fas fa-l fa-volume-mute" style="color: #17bf07;"></i>`;
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


  // Snowflakes
  // https://github.com/hcodes/snowflakes/
  var snowflakes = new Snowflakes({
    color: '#5ECDEF', // Default: "#5ECDEF"
    container: document.querySelector('#snowflakes-container'), // Default: document.body
    count: 30, // 100 snowflakes. Default: 50
    minOpacity: 0.3, // From 0 to 1. Default: 0.6
    maxOpacity: 0.5, // From 0 to 1. Default: 1
    minSize: 10, // Default: 10
    maxSize: 30, // Default: 25
    rotation: true, // Default: true
    speed: 1, // The property affects the speed of falling. Default: 1
    wind: true, // Without wind. Default: true
    width: 500, // Default: width of container
    height: 500, // Default: height of container
    zIndex: 100, // Default: 9999,
    autoResize: true // Default: true
});
});
