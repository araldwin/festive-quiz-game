/*
The game script
This script is used for the game page.
It uses the data from the db.js file to populate the game page.
It also contains the functions that control the game play.
*/

import {
  getAttempts,
  setAttempts,
  setCurrentQuestion,
  getCurrentQuestion,
} from "./game-storage.js";
import { displayAttempts, displayQuestion } from "./game-display.js";

runGame();

function runGame() {
  displayAttempts(getAttempts());
  displayQuestion(getCurrentQuestion());

  attachEventListeners();
}

function checkAnswer(answer) {
  const currentQuestion = getCurrentQuestion();
  const correctAnswer = currentQuestion.correctAnswer;

  // Update the current question in local storage
  setCurrentQuestion();

  if (answer === correctAnswer) {
    // Correct answer
    // Update the progress bar
    console.log("correct");
    // Run the game again
    setTimeout(() => {
      runGame();
    }, 1000);
    // updateProgress();
  } else {
    console.log("wrong");
    // Run the game again
    setTimeout(() => {
      runGame();
    }, 1000);
    // Incorrect answer
    // Remove an attempt
    setAttempts(getAttempts() - 1);
  }
}

function attachEventListeners() {
  const answerButtons = document.querySelectorAll(".answer");
  answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.textContent;
      console.log(answer);
      checkAnswer(answer);
    });
  });
}
