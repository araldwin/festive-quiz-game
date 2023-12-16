/*
The game storage script.
Used to store and retrieve data from local storage.
*/

import { DATA } from "./db.js";

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
 * Get an array of all the topics from the DATA array.
 * @returns {array} - An array of all the available topic names represented as strings.
 */
export function getAvailableTopics() {
  const availableTopics = DATA.map((topicObj) => topicObj.topic);

  return availableTopics;
}

/**
 * Set the current topic obj in local storage.
 * Find the topic object from the DATA array by matching the topic name and set it in local storage.
 * @param {string} topic - The topic name.
 * E.g: {topic: "Christmas Trivia", questions: [{question: "What is?", answers: ["a", "b", "c", "d"], correctAnswer: "a"}]}
 */
export function setCurrentTopic(topicName) {
  const topicObj = DATA.find((topic) => topic.topic === topicName);
  localStorage.setItem("currentTopic", JSON.stringify(topicObj));
}

/**
 * Get the current topic from local storage.
 * @returns {object} - The topic object
 */
export function getCurrentTopicObj() {
  const currentTopic = localStorage.getItem("currentTopic");
  return JSON.parse(currentTopic);
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
 * Get a random question from a current topic object that is stored in local storage.
 * Remove the selected question from the array of questions in the current topic object.
 * @returns {object} - An object with random question, answers and correct answer.
 * E.g: {question: "What is?", answers: ["a", "b", "c", "d"], correctAnswer: "a"}
 */
export function getRandomQuestion() {
  const topicObj = getCurrentTopicObj();
  const questions = topicObj.questions;

  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];

  // Remove the selected question from the original array
  questions.splice(randomIndex, 1);

  // Update the current topic in local storage
  setCurrentTopic(topicObj);

  return randomQuestion;
}

/**
 * Set the current question to local storage.
 * @param {object} randomQuestion - An object with random question, answers and correct answer.
 */
export function setCurrentQuestion(randomQuestion) {
  localStorage.setItem("currentQuestion", JSON.stringify(randomQuestion));
}

/**
 * Get the current question from local storage.
 * If there is no current question in local storage, get a random question and set it in local storage.
 * @returns {object} - An object with question, answers and correct answer.
 * E.g: {question: "What is?", answers: ["a", "b", "c", "d"], correctAnswer: "a"}
 */
export function getCurrentQuestion() {
  let currentQuestion = JSON.parse(localStorage.getItem("currentQuestion"));
  if (!currentQuestion) {
    currentQuestion = getRandomQuestion();
    setCurrentQuestion(currentQuestion);
  }
  return currentQuestion;
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
