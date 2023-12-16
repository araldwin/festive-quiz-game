/*
The general script for the all the pages.
Used init bootstrap tooltips, popovers and modals throughout the site.
*/

const rulesButton = document.getElementById('rulesButton');
const rulesModal = document.getElementById('rulesModal');

rulesButton.addEventListener('click', openModal);

function openModal() {
    rulesModal.style.display = 'block';
}
function closeModal() {
    rulesModal.style.display = 'none';
}

window.addEventListener('click', (event) => {
    if (event.target === rulesModal) {
        closeModal();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const soundWrapper = document.getElementById("sound-wrapper");
    const music = document.getElementById("background-music");

    soundWrapper.addEventListener("click", function () {
      // Toggle between play and pause when the sound icon is clicked
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
    });
});
