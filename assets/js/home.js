  // Add the continue button if there is a current topic

import { getCurrentTopicObj } from "./game-storage.js";


document.addEventListener("DOMContentLoaded", function () {

  const newGameBtn = document.getElementById("new-game-btn");
  if (getCurrentTopicObj() && getCurrentTopicObj().questions.length > -1) {
    // If there is a current topic and current question, create the continue button
    const continueBtn = document.createElement("button");
    continueBtn.id = "continue-game";
    continueBtn.className = "btn";
    continueBtn.innerText = "Continue";

    // Append the continue button after the new game button
    newGameBtn.parentNode.insertBefore(continueBtn, newGameBtn.nextSibling);

    // Attach the event listener to the continue button
    continueBtn.addEventListener("click", () => {
      window.location.href = "game.html";
    });
  }
});