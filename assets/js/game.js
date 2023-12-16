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
  getProgress,
  setProgress,
} from "./game-storage.js";
import { displayAttempts, displayQuestion, displayProgress } from "./game-display.js";

runGame();

function runGame() {
  displayAttempts(getAttempts());
  displayQuestion(getCurrentQuestion());
  displayProgress(getProgress());

  attachEventListeners();
}

function checkAnswer(answer, answerButton) {
  const currentQuestion = getCurrentQuestion();
  const correctAnswer = currentQuestion.correctAnswer;

  // Update the current question in local storage
  setCurrentQuestion();

  if (answer === correctAnswer) {
    // Correct answer
    // Update the display progress
    const progress = updateProgress();
    displayProgress(progress);

    // Mark the answer as correct
    markAnswerCorrect(answerButton);
    // Run the game again
    setTimeout(() => {
      runGame();
    }, 2000);
  } else {
    // Wrong answer
    markAnswerWrong(answerButton);
    // Remove an attempt
    setAttempts(getAttempts() - 1);
    // Run the game again
    setTimeout(() => {
      runGame();
    }, 2000);
  }
}

/**
 * Attach event listeners to the answer buttons.
 */
function attachEventListeners() {
  const answerButtons = document.querySelectorAll(".answer");
  answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.textContent;
      checkAnswer(answer, button);
    });
  });
}


/**
 * Update the progress bar in local storage.
 * @returns {number} - The updated progress bar value.
 */
function updateProgress() {
  const currentProgress = getProgress();
  const updatedProgress = currentProgress + 10;
  setProgress(updatedProgress);

  return updatedProgress;
}


/**
* Mark an answer as correct
*/
function markAnswerCorrect(answerButton) {
  // disasble all the answer buttons
  const answerButtons = document.querySelectorAll(".answer");
  answerButtons.forEach((button) => {
    button.disabled = true;
  });
  // Mark the answer as correct
  answerButton.classList.add("correct-answer");
}

/**
* Mark an answer as wrong
*/
function markAnswerWrong(answerButton) {
  // disasble all the answer buttons
  const answerButtons = document.querySelectorAll(".answer");
  answerButtons.forEach((button) => {
    button.disabled = true;
  });
  // Mark the answer as wrong
  answerButton.classList.add("wrong-answer");
}