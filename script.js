// 💗 Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  const symbols = ["💗", "✨", "🌸", "🤍", "✦"];
  heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 15 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 800);


// 💬 Quotes
let quotes = [];

const quoteEl = document.getElementById("quote");
const sourceEl = document.getElementById("source");
const tagEl = document.getElementById("tag");
const btn = document.getElementById("revealBtn");
const card = document.querySelector(".quote-card");

// 🔄 Fetch JSON data
fetch("quotes.json")
  .then(response => response.json())
  .then(data => {
    quotes = data;
  })
  .catch(error => {
    console.error("Error loading quotes:", error);
  });

// 🎯 Button click
btn.addEventListener("click", () => {
  if (quotes.length === 0) return;

  const random = quotes[Math.floor(Math.random() * quotes.length)];

  quoteEl.textContent = random.text;

  sourceEl.textContent = random.source;
  tagEl.textContent = random.tag;

  sourceEl.classList.remove("hidden");
  tagEl.classList.remove("hidden");

  card.classList.remove("animate");
  void card.offsetWidth;
  card.classList.add("animate");
});