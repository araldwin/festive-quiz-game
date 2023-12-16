/*
The game storage script.
Used to store and retrieve data from local storage.
*/

import { getRandomQuestion } from "./random-object.js";

/**
 * Set the difficulty in local storage.
 * E.g: difficulty: {"easy": 3}
 * @param {string} difficulty - The difficulty level. E.g: easy, medium, hard.
 */
export function setDifficulty(difficulty) {
  let attempts = 0;

  switch (difficulty) {
    case "easy":
      attempts = 3;
      break;
    case "medium":
      attempts = 2;
      break;
    case "hard":
      attempts = 1;
      break;
  }

  localStorage.setItem(
    "difficulty",
    JSON.stringify({
      [difficulty]: attempts,
    })
  );

  setAttempts(attempts);
}

/**
 * Set the number of attempts in local storage.
 * @param {number} attempts
 */
export function setAttempts(attempts) {
  localStorage.setItem("attempts", attempts);
}

/**
 * Get the number of attempts from local storage.
 * @returns {number} - The number of attempts. E.g: 3, 2, 1.
 */
export function getAttempts() {
  const attempts = localStorage.getItem("attempts");

  return attempts;
}

/**
 * Set the current question to local storage.
 */
export function setCurrentQuestion() {
  const data = getRandomQuestion();
  localStorage.setItem("currentQuestion", JSON.stringify(data));
}

/**
 * Get the current question from local storage.
 * @returns {object} - A random question object with the topic name, question, answers and correct answer.
 * E.g: {topic: "Christmas Trivia", question: "What is?", answers: ["a", "b", "c", "d"], correctAnswer: "a"}
 */
export function getCurrentQuestion() {
  return JSON.parse(localStorage.getItem("currentQuestion"));
}

/**
 * Set the progress bar in local storage.
 * @param {number} progress - The progress bar value.
 */
export function setProgress(progress) {
  localStorage.setItem("progress", progress);
}

/**
 * Get the progress bar value from local storage.
 * @returns {number} - The progress bar value.
 */
export function getProgress() {
  return Number(localStorage.getItem("progress"));
}
