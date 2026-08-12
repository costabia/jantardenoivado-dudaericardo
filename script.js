const invitation = document.querySelector("#invitation");
const openButton = document.querySelector("#openButton");
const frameAnimation = document.querySelector(".frame-animation");

// Recria a URL a cada carregamento para o GIF reiniciar mesmo quando o navegador usa cache.
frameAnimation.addEventListener("load", () => frameAnimation.classList.add("is-loaded"), { once: true });
frameAnimation.src = `${frameAnimation.dataset.src}?reload=${Date.now()}`;

function openInvitation() {
  invitation.classList.add("is-open");
  document.body.classList.add("is-open");
}

openButton.addEventListener("click", openInvitation);
