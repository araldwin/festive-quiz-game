/*
This module contains functions to display the game.
*/


/**
 * Display the available topics in the game.
 * @param {array} availableTopics - An array of all the available topics represented as strings.
 */
export function displayAvailableTopics(availableTopics) {
  const topicList = document.getElementById("topic-list");
  let topicListHTML = "";
  console.log(availableTopics);
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
  const attemptEl = `<i class="fa-solid fa-cookie fa-beat fa-lg" style="color: #ff781f;"></i>`
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