/*
This module contains functions to display the game.
*/


/**
 * Display topic, question and answers in the game.
 * @param {*} randomQuestionObj
 */

export function displayQuestion(randomQuestionObj) {
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
export function displayAttempts(attemptsNumber) {
  const attemptsWrapper= document.getElementById("attempts");
  const attemptEl = `<i class="fa-solid fa-cookie-bite fa-xl fa-beat" style="color: #af6d02;"></i>`
  attemptsWrapper.innerHTML = attemptEl.repeat(attemptsNumber);
}