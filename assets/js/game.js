/*
The game script
This script is used for the game page.
It uses the data from the db.js file to populate the game page.
It also contains the functions that control the game play.
*/

import { setDifficulty, getAttempts } from "./game-storage.js";
import { DATA } from "./db.js";

runGame();

function runGame() {
  displayAttempts(getAttempts());
  displayQuestion(getRandomQuestion())
}

/**
 * Return a random object from an array.
 * @param {array} array - The array to get a random object from.
 * @returns {object} - A random object from the array.
 */
function getRandomObject(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * @returns {object} - A random topic object from the DATA array.
 */
function getRandomTopicObj() {
  const randomTopicObj = getRandomObject(DATA);
  return randomTopicObj;
}

/**
 * Get a random question from a random topic object.
 * @returns {object} - A random question object with the topic name, question, answers and correct answer.
 * E.g: {topic: "Christmas Trivia", question: "What is?", answers: ["a", "b", "c", "d"], correctAnswer: "a"}
 */
function getRandomQuestion() {
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

function displayQuestion(randomQuestionObj) {
  const topic = document.getElementById("topic");
  const question = document.getElementById("question");
  const answers = document.getElementById("answers");

  const answer1 = randomQuestionObj.answers[0];
  const answer2 = randomQuestionObj.answers[1];
  const answer3 = randomQuestionObj.answers[2];
  const answer4 = randomQuestionObj.answers[3];

  topic.textContent = randomQuestionObj.topic;
  question.textContent = randomQuestionObj.question;
  answers.innerHTML = `
    <div class="col-12">
      <button class="btn btn-outline-secondary btn-lg rounded-0 m-4 answer" >${answer1}</button>
      <button class="btn btn-outline-secondary btn-lg rounded-0 m-4 answer" >${answer2}</button>
    </div>
    <div class="col-12">
      <button class="btn btn-outline-secondary btn-lg rounded-0 m-4 answer" >${answer3}</button>
      <button class="btn btn-outline-secondary btn-lg rounded-0 m-4 answer" >${answer4}</button>
    </div>
  `;
}

/**
 * Display the number of attempts in the game, based on the difficulty level.
 */
function displayAttempts(attemptsNumber) {
  for (let i = 0; i < attemptsNumber; i++) {
    const attempt = document.createElement("i");
    attempt.classList.add("fa-solid", "fa-cookie-bite", "fa-xl", "fa-beat");
    attempt.style.color = "#af6d02";
    document.getElementById("attempts").appendChild(attempt);
  }
}
