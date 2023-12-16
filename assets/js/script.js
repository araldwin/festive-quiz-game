/*
The general script for the all the pages.
Used init bootstrap tooltips, popovers and modals throughout the site.
*/
import { setDifficulty, setCurrentQuestion } from "./game-storage.js";

// Set the difficulty level when the play button is clicked.
const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", () => {
  const difficulty = playButton.dataset.difficulty;

  setDifficulty(difficulty);
  setCurrentQuestion();
  window.location.href = "game.html";
});

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
