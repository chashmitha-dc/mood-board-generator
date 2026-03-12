const quotes = [
  "Soft pastels, strong moods.",
  "A gentle hue is the loudest whisper.",
  "Collect moments, not things — especially in color.",
  "Your vibe is your palette.",
  "Let your heart choose the color.",
  "Daydream in pastel & sunshine.",
  "Small joys look best in soft light.",
  "A calm mind is the richest mood board.",
  "Aesthetic energy blooms where you plant it.",
  "Warm feelings in cool tones.",
];

const palettes = [
  ["#FDE2FF", "#D7B2FF", "#B4E1FF", "#BFF7E6"],
  ["#FFF2E5", "#FFDEB4", "#FFB7C5", "#B8E0FF"],
  ["#E9F5FF", "#D3E8FF", "#E0FEFF", "#C9FAF8"],
  ["#FCE4FF", "#FFD7EC", "#FFB3E6", "#FFC6C6"],
  ["#F7F7FF", "#D5E4FF", "#C1FFD7", "#FFF4C5"],
  ["#FFF7E7", "#FFE0C8", "#FFD1E0", "#D6F7FF"],
  ["#F2F2FF", "#D0C1FF", "#E3FFC7", "#FFDAE8"],
];

const icons = [
  ["✨", "🌸", "🫧", "🪞"],
  ["🎨", "☁️", "🕊️", "🌿"],
  ["🌈", "🍥", "🌷", "📸"],
  ["🦋", "🍬", "🪄", "📚"],
  ["🌙", "🌟", "🍧", "🧩"],
  ["🫖", "🧸", "🌱", "🧘"],
  ["💫", "🥞", "🦢", "🎀"],
];

const quoteEl = document.getElementById("quote");
const paletteEl = document.getElementById("palette");
const iconsEl = document.getElementById("icons");
const button = document.getElementById("generateBtn");

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

function animateUpdate(element, className, onDone) {
  element.classList.add(className);
  element.addEventListener(
    "transitionend",
    function handler(event) {
      if (event.propertyName === "opacity") {
        element.removeEventListener("transitionend", handler);
        element.classList.remove(className);
        onDone?.();
      }
    },
    { once: true }
  );
}

function updateMood() {
  const nextQuote = random(quotes);
  const nextPalette = random(palettes);
  const nextIcons = random(icons);

  animateUpdate(quoteEl, "quote-fade", () => {
    quoteEl.textContent = nextQuote;
  });

  animateUpdate(paletteEl, "palette-fade", () => {
    paletteEl.innerHTML = "";
    nextPalette.forEach((color) => {
      const span = document.createElement("span");
      span.style.background = color;
      paletteEl.appendChild(span);
    });
  });

  animateUpdate(iconsEl, "icons-fade", () => {
    iconsEl.textContent = nextIcons.join("  ");
  });
}

button.addEventListener("click", updateMood);

// Initialize with a subtle first mood
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(updateMood, 250);
});
