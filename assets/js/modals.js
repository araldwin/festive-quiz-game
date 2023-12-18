/*
Modal functions that add modals to the page
*/

export function addDifficultyModal () {

  const modalsContainer = document.getElementById("modals-container");
  const modal = document.createElement("div");

  // Create the modal HTML
  const modalHTML = `
  <!-- Select Difficulty Modal -->
  <div class="modal fade" id="selectDifficultyModalToggle" data-bs-backdrop="static" data-bs-keyboard="false"
      aria-hidden="true" aria-labelledby="selectDifficultyModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="selectDifficultyModalToggleLabel">Select Difficulty</h1>
            <button type="button" class="btn-close" onclick="window.location.href='index.html'"
              aria-label="Close"></button>
          </div>
          <div class="modal-body text-center">
            <button class="btn btn-success w-75 difficulty-btn" data-bs-target="#selectTopicModalToggle"
              data-bs-toggle="modal" data-difficulty="easy">
              Jingle Bells Level
            </button>
            <button class="btn btn-warning w-75 my-2 difficulty-btn" data-bs-target="#selectTopicModalToggle"
              data-bs-toggle="modal" data-difficulty="medium">
              Frosty the Snowman Level
            </button>
            <button class="btn btn-danger w-75 difficulty-btn" data-bs-target="#selectTopicModalToggle"
              data-bs-toggle="modal" data-difficulty="hard">
              Santa's Workshop Challenge
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ./Select Difficulty Modal -->
  `;

  // Insert the modal HTML into the modal container
  modal.innerHTML = modalHTML;
  modalsContainer.appendChild(modal);
}

/**
 * Add the rules modal to the page.
 * @param {string} buttonString - The button to be displayed in the modal footer depending on the page.
 */
export function addRulesModal(buttonString) {

  const modalsContainer = document.getElementById("modals-container");
  const modal = document.createElement("div");

  // Create the modal HTML
  const modalHTML = `
  <!-- Rules Modal -->
  <div class="modal fade" id="rulesModal" tabindex="-1" aria-labelledby="rulesModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5 w-100 text-center" id="rulesModalLabel">Welcome to Santa's Quiz Adventure!</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h5>Mission:</h5>
          <p>
            Help Santa and his magical sleigh deliver presents to children around the world by answering Christmas-themed questions correctly.
            The journey is filled with joy and challenges, so put on your thinking cap and spread the holiday spirit!
          </p>

          <h5>Elfin Instructions:</h5>
          <!-- style list markers as stars -->
          <ul class="rule-markers">
            <li>
              Choose a difficulty level: Easy, Medium, or Hard.
              Each setting represents the magical journey's intensity and the number of cookies Santa has.
              <ul class="list-unstyled">
                <li>🌟 Jingle Bells Level: 3 cookies</li>
                <li>🌲 Frosty the Snowman Level: 2 cookies</li>
                <li>❄️ Santa's Workshop Challenge: 1 cookie</li>
              </ul>
            </li>
            <li>
              Answer questions correctly to advance Santa and his sleigh along the progress bar.
              The more questions you get right, the closer Santa gets to his destination!
            </li>
            <li>
              You have a total of 10 questions per game.
              So use them wisely to make Santa's journey memorable.
            </li>
            <li>
              But beware! Incorrect answers may cost Santa precious cookies.
              Keep an eye on the remaining cookies, and don't let them run out before Santa reaches one of his homes.
            </li>
          </ul>

        </div>
        <div class="modal-footer d-flex justify-content-center">
          ${buttonString}
        </div>
      </div>
    </div>
  </div>
  <!-- ./Rules Modal -->
  `;

  // Insert the modal HTML into the modal container
  modal.innerHTML = modalHTML;
  modalsContainer.appendChild(modal);
}

export function addTopicModal() {

  const modalsContainer = document.getElementById("modals-container");
  const modal = document.createElement("div");

  // Create the modal HTML
  const modalHTML = `
  <!-- Select Topic Modal -->
    <div class="modal fade" id="selectTopicModalToggle" data-bs-backdrop="static" data-bs-keyboard="false"
      aria-hidden="true" aria-labelledby="selectTopicModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="selectTopicModalToggleLabel">Select Topic</h1>
            <button type="button" class="btn-close" onclick="window.location.href='index.html'"
              aria-label="Close"></button>
          </div>
          <div id="topic-list" class="modal-body text-center">
            <!-- Use JS to populate the topics. See assets/js/game-display.js -> displayAvailableTopics -->
          </div>
        </div>
      </div>
    </div>
  <!-- ./Select Topic Modal -->
  `;

  // Insert the modal HTML into the modal container
  modal.innerHTML = modalHTML;
  modalsContainer.appendChild(modal);
}
