const invitation = document.querySelector("#invitation");
const openButton = document.querySelector("#openButton");

function restartFrameAnimation() {
  const current = document.querySelector(".frame-animation");
  if (!current) return;

  // Reassigning the URL with a cache-busting query forces animated GIFs
  // to start from frame one on every page load, including mobile browsers.
  current.src = `assets/frame-animation.svg?restart=${Date.now()}`;
}

// Start/restart immediately; waiting for DOMContentLoaded made the first
// animation frame appear late on some mobile browsers.
restartFrameAnimation();

window.addEventListener("pageshow", (event) => {
  if (event.persisted) restartFrameAnimation();
});

function openInvitation() {
  invitation.classList.add("is-open");
  document.body.classList.add("is-open");
}

openButton.addEventListener("click", openInvitation);
