  // Add the continue button if there is a current topic

import { getCurrentTopicObj } from "./game-storage.js";
import { stopSnowflakes, destroySnowflakes } from "./homeSnowflakes.js";
import { stopSnowflakes as stopSnowflakesGame, destroySnowflakes as destroySnowflakesGame } from "./gameSnowflakes.js";

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

  let screenWidth = window.innerWidth;

  // Stop the snowflakes animation on mobile devices
  if (screenWidth < 768) {
    stopSnowflakes();
    stopSnowflakesGame();
  }

  // handle window resize and stop snowflakes animation on mobile devices
  window.addEventListener("resize", () => {
    screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      stopSnowflakes();
      destroySnowflakes();
      stopSnowflakesGame();
      destroySnowflakesGame();
    }
  });


});