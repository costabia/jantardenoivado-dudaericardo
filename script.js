const invitation = document.querySelector("#invitation");
const openButton = document.querySelector("#openButton");
const frameAnimation = document.querySelector(".frame-animation");

window.setTimeout(() => {
  frameAnimation.src = frameAnimation.dataset.src;
  frameAnimation.classList.add("is-loaded");
}, 1500);

function openInvitation() {
  invitation.classList.add("is-open");
  document.body.classList.add("is-open");
}

openButton.addEventListener("click", openInvitation);
