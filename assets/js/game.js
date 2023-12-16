/*
The game script
This script is used for the game page.
It uses the data from the db.js file to populate the game page.
It also contains the functions that control the game play.
*/

import { getAttempts, getCurrentQuestion } from "./game-storage.js";

runGame();

function runGame() {
  displayAttempts(getAttempts());
  displayQuestion(getCurrentQuestion());
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
