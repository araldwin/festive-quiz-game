/*
Rules modal
Add this script to html file where you want to insert the modal
<script src="assets/js/modals/rules.js"></script>
*/

const modalsContainer = document.getElementById("modals-container");
const modal = document.createElement("div");

// Create the modal HTML
const modalHTML = `
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
          Help Santa and his magical sleigh reach the North Pole by answering Christmas-themed questions correctly.
          The journey is filled with joy and challenges, so put on your thinking cap and spread the holiday spirit!
        </p>

        <h5>Elfin Instructions:</h5>
        <!-- style list markers as stars -->
        <ul class="rule-markers">
          <li>
            Choose a difficulty level: Easy, Medium, or Hard.
            Each setting represents the magical journey's intensity and the number of lives Santa has.
            <ul class="list-unstyled">
              <li>🌟 Easy: 3 lives</li>
              <li>🌲 Medium: 2 lives</li>
              <li>❄️ Hard: 1 life</li>
            </ul>
          </li>
          <li>
            Answer questions correctly to advance Santa and his sleigh along the progress bar.
            The more questions you get right, the closer Santa gets to the enchanting North Pole.
          </li>
          <li>
            But beware! Incorrect answers may cost Santa precious lives(deers).
            Keep an eye on the remaining lives, and don't let them run out before reaching the North Pole!
          </li>
        </ul>

      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#selectDifficultyModalToggle">Ho-Ho Hurry!</button>
      </div>
    </div>
  </div>
</div>
`;

// Insert the modal HTML into the modal container
modal.innerHTML = modalHTML;
modalsContainer.appendChild(modal);
