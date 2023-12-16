/*
  This module contains functions to get a random topic and question from the DATA array.
*/

import { DATA } from "./db.js";

/**
 * Return a random object from an array.
 * @param {array} array - The array to get a random object from.
 * @returns {object} - A random object from the array.
 */
export function getRandomObject(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * @returns {object} - A random topic object from the DATA array.
 */
export function getRandomTopicObj() {
  const randomTopicObj = getRandomObject(DATA);
  return randomTopicObj;
}

/**
 * Get a random question from a random topic object.
 * @returns {object} - A random question object with the topic name, question, answers and correct answer.
 * E.g: {topic: "Christmas Trivia", question: "What is?", answers: ["a", "b", "c", "d"], correctAnswer: "a"}
 */
export function getRandomQuestion() {
  const topicObj = getRandomTopicObj();
  const randomQuestion = getRandomObject(topicObj.questions);
  const result = {
    topic: topicObj.topic,
    question: randomQuestion.question,
    answers: randomQuestion.answers,
    correctAnswer: randomQuestion.correctAnswer,
  };
  return result;
}