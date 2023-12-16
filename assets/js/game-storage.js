/*
The game storage script.
Used to store and retrieve data from local storage.
*/


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
function setAttempts(attempts) {
  localStorage.setItem("attempts", attempts);
}

/**
 * Get the number of attempts from local storage.
 * @returns {number} - The number of attempts. E.g: 3, 2, 1.
 */
export function getAttempts() {
  const difficulty = JSON.parse(localStorage.getItem("difficulty"));
  const attempts = difficulty[Object.keys(difficulty)[0]];

  return attempts;
}
