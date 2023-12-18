/*
The game script
This script is used for the game page.
It uses the data from the db.js file to populate the game page.
It also contains the functions that control the game play.
*/

import {
  getAttempts,
  setAttempts,
  setCurrentTopic,
  getCurrentTopicObj,
  getRandomQuestion,
  setCurrentQuestion,
  getCurrentQuestion,
  getProgress,
  setProgress,
} from "./game-storage.js";
import {
  displayAttempts,
  displayQuestion,
  displayQuestionCount,
  displayCurrentTopic,
  displayProgress,
  displayFireworks,
  displayWinGameModal,
  displayGameOverModal,
} from "./game-display.js";

runGame();

function runGame() {
  if (getCurrentTopicObj() === null || getCurrentQuestion() === null || getAttempts() === null) {
    // Redirect to the home page
    window.location.href = "index.html";
    return;
  }

  displayCurrentTopic(getCurrentTopicObj().topic);
  displayQuestion(getCurrentQuestion());
  displayQuestionCount(getCurrentTopicObj().questions.length);
  displayAttempts(getAttempts());
  displayProgress(getProgress());

  attachEventListeners();
}

/**
 * Check if the answer is correct or wrong.
 * @param {string} answer - The answer that was clicked.
 * @param {object} answerButton - The answer button that was clicked.
 */
function checkAnswer(answer, answerButton) {
  const currentQuestion = getCurrentQuestion();
  const correctAnswer = currentQuestion.correctAnswer;

  if (answer === correctAnswer) {
    // Correct answer
    // Update the display progress
    const progress = updateProgress();
    displayProgress(progress);

    // Mark the answer as correct
    markAnswerCorrect(answerButton);

    if (progress === 100) {
      winGame();
      return;
    }

    setTimeout(() => {
      // If there are no more questions, end the game
      if (getCurrentTopicObj().questions.length === 0) {
        endGame();
        return;
      } else {
        // Update the current question in local storage
        setCurrentQuestion(getRandomQuestion());
        runGame();
      }
    }, 800);
  } else {
    // Wrong answer
    markAnswerWrong(answerButton);

    const attempts = getAttempts() - 1;
    // Remove an attempt
    setAttempts(attempts);
    displayAttempts(attempts);

    setTimeout(() => {
      // If there are no more attempts or questions, end the game
      if (attempts < 1 || getCurrentTopicObj().questions.length === 0) {
        endGame();
        return;
      } else {
        // Update the current question in local storage
        setCurrentQuestion(getRandomQuestion());
        runGame();
      }
    }, 800);
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
  const updatedProgress = currentProgress + 20;
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

/**
 * End the game
 * Display the game over modal and reset progress
 */
function endGame() {
  displayQuestionCount(-1);
  setProgress(0);
  setCurrentTopic(null);
  setCurrentQuestion(null);
  setTimeout(() => {
    displayGameOverModal();
  }, 300);
}

/**
 * Win the game
 * Display the win modal and reset progress
 */
function winGame() {
  setProgress(0);
  setCurrentTopic(null);
  setCurrentQuestion(null);
  displayFireworks();
  setTimeout(() => {
    displayWinGameModal();
  }, 2000);
}