/*
This module contains functions to display the game.
*/

import { stopSnowflakes } from "./gameSnowflakes.js";

/**
 * Display the available topics in the game.
 * @param {array} availableTopics - An array of all the available topics represented as strings.
 */
export function displayAvailableTopics(availableTopics) {
  const topicList = document.getElementById("topic-list");
  let topicListHTML = "";
  availableTopics.forEach((topicName) => {
    topicListHTML += `
      <button class="btn btn-success w-75 my-1 topicBtn" data-topic="${topicName}">
        ${topicName}
      </button>
    `;
  });

  topicList.innerHTML = topicListHTML;
}

/**
 * Display the current topic in the game.
 * @param {string} topicName - The current topic name.
 */
export function displayCurrentTopic(topicName) {
  const topic = document.getElementById("topic");
  topic.textContent = topicName;
}

/**
 * Display topic, question and answers in the game.
 * @param {*} questionObj
 * E.g: {question: "What is?", answers: ["a", "b", "c", "d"], correctAnswer: "a"}
 */
export function displayQuestion(questionObj) {
  const question = document.getElementById("question");
  const answers = document.getElementById("answers");

  const answer1 = questionObj.answers[0];
  const answer2 = questionObj.answers[1];
  const answer3 = questionObj.answers[2];
  const answer4 = questionObj.answers[3];

  question.textContent = questionObj.question;
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
 * Display the question count in the game.
 * @param {number} questionCount - The number of remaining questions in the current topic.
 */
export function displayQuestionCount(questionCount) {
  const questionCountEl = document.getElementById("question-count");
  questionCountEl.textContent = questionCount + 1;
}

/**
 * Display the number of attempts in the game, based on the difficulty level.
 */
export function displayAttempts(attemptsNumber) {
  const attemptsWrapper = document.getElementById("attempts");
  const attemptEl = `<i class="fa-solid fa-cookie fa-beat fa-lg" style="color: #ff781f;"></i>`;
  attemptsWrapper.innerHTML = attemptEl.repeat(attemptsNumber);
}

/**
 * Display the progress bar in the game.
 */
export function displayProgress(progress) {
  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = `${progress}%`;
  progressBar.setAttribute("aria-valuenow", progress);
}

/**
 * Display the firework animation when the game is won.
 */
export function displayFireworks() {
  stopSnowflakes();

  // Create div elements
  const parentDivElement = document.createElement("div");
  const firstChildDivElement = document.createElement("div");
  const secondChildDivElement = document.createElement("div");

  // Add the "firework" class to the div element
  parentDivElement.className = "pyro";

  // Add the "before" class to the div element
  firstChildDivElement.className = "before";

  // Add the "after" class to the div element
  secondChildDivElement.className = "after";

  // Add child div elements to the parent div element
  parentDivElement.appendChild(firstChildDivElement);
  parentDivElement.appendChild(secondChildDivElement);

  // Get the first child of the body
  const firstChildOfBody = document.body.firstChild;

  // Insert the div element before the first child of the body
  document.body.insertBefore(parentDivElement, firstChildOfBody);
}

/**
 * Display the win game modal.
 */
export function displayWinGameModal() {
  stopSnowflakes();

  const winGameModal = new bootstrap.Modal("#winGameModal");
  const winGameModalHeader = document.getElementById("winGameModalLabel");
  const congratulationsArray = [
    "Merry Celebrations!",
    "Jingle Jolly, You Did It!",
    "Ho-Ho-Hooray!",
    "Santa's Salutations!",
    "Festive Felicitations!",
    "Yuletide Triumph!",
    "Congrats with Bells On!",
    "Snowy Success!",
    "Cheers to You!",
    "Bravo, Jolly Elf!"
  ];
  // set a random congratulations message
  winGameModalHeader.textContent = congratulationsArray[
    Math.floor(Math.random() * congratulationsArray.length)
  ];
  winGameModal.show();
}

/**
 * Display the game over modal.
 */
export function displayGameOverModal() {
  stopSnowflakes();

  const gameOverModal = new bootstrap.Modal("#gameOverModal");
  const gameOverModalHeader = document.getElementById("gameOverModalLabel");

  const gameOverArray = [
    "Festive Failure! Game Over!",
    "Better Luck Next Time!",
    "The Adventure Ends Here.",
    "Santa's Sleigh Got Stuck!",
    "Reindeer Rest Time!",
    "Snowy Setback, Game Over!",
    "Oops! Try Again!",
    "The Bells Have Tolled, Game Over!",
    "Elves Need a Break!"
  ];

  // set a random game over message
  gameOverModalHeader.textContent = gameOverArray[
    Math.floor(Math.random() * gameOverArray.length)
  ];

  gameOverModal.show();
}
