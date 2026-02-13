const yesButton = document.getElementById("yesBtn");
const noButton = document.getElementById("noBtn");
const note = document.getElementById("note");
const actions = document.querySelector(".actions");

function moveNoButton() {
  const area = actions.getBoundingClientRect();
  const button = noButton.getBoundingClientRect();

  const maxX = (area.width - button.width);
  const maxY = (area.height - button.height);

  if (maxX <= 0 || maxY <= 0) return;

  const nextX = (Math.random() * 2 - 1) * maxX - 100;
  const nextY = (Math.random() * 2 - 1) * maxY;

  noButton.style.transform = `translate(${nextX}px, ${nextY}px)`;
}

function fadeOutImage() {
  const overlay = document.getElementById("imageOverlay");
  overlay.classList.add("fade-out");
  // Remove from DOM after animation
  setTimeout(() => {
      overlay.remove();
  }, 800);
}

function flashImage(src) {
    const img = document.createElement("img");
    img.src = src;
    img.className = "flash-image";

    document.body.appendChild(img);

    // Remove after animation ends
    img.addEventListener("animationend", () => {
        img.remove();
    });
}

noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
});
