// Forest whispers
const whispers = [
  "The wind carries secrets between the branches.",
  "A distant owl watches from the shadows.",
  "Leaves rustle softly, like pages turning in an old book.",
  "Roots speak in silence, holding stories beneath the soil.",
  "The woods remember every footstep, every quiet thought."
];

const whisperText = document.getElementById("whisperText");
let whisperIndex = 0;

function updateWhisper() {
  whisperIndex = (whisperIndex + 1) % whispers.length;
  whisperText.textContent = whispers[whisperIndex];
}

setInterval(updateWhisper, 6000);

// Enter Woods button: subtle zoom-in effect
const enterBtn = document.getElementById("enterWoodsBtn");
const forestScene = document.querySelector(".forest-scene");

enterBtn.addEventListener("click", () => {
  forestScene.classList.add("entered");
  forestScene.scrollIntoView({ behavior: "smooth" });
});

// Movement controls
const controlButtons = document.querySelectorAll(".control-btn");
const body = document.body;

controlButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;

    switch (action) {
      case "fireflies":
        body.classList.toggle("no-fireflies");
        break;
      case "fog":
        body.classList.toggle("no-fog");
        break;
      case "breeze":
        forestScene.classList.add("breezy");
        break;
      case "calm":
        forestScene.classList.remove("breezy");
        break;
    }
  });
});

// Gentle parallax on mouse move
forestScene.addEventListener("mousemove", (e) => {
  const rect = forestScene.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;

  const back = forestScene.querySelector(".layer-back");
  const mid = forestScene.querySelector(".layer-mid");
  const front = forestScene.querySelector(".layer-front");

  back.style.transform = `translate(${x * -10}px, ${y * -5}px)`;
  mid.style.transform = `translate(${x * 15}px, ${y * 8}px)`;
  front.style.transform = `translate(${x * 25}px, ${y * 12}px)`;
});

// Reset parallax when mouse leaves
forestScene.addEventListener("mouseleave", () => {
  const back = forestScene.querySelector(".layer-back");
  const mid = forestScene.querySelector(".layer-mid");
  const front = forestScene.querySelector(".layer-front");

  back.style.transform = "";
  mid.style.transform = "";
  front.style.transform = "";
});
