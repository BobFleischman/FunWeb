// ── Color Burst ──────────────────────────────────────────────
const colorBtn = document.getElementById('colorBtn');
const colorDisplay = document.getElementById('colorDisplay');

colorBtn.addEventListener('click', () => {
  const hue = Math.floor(Math.random() * 360);
  colorDisplay.style.backgroundColor = `hsl(${hue}, 70%, 55%)`;
  colorBtn.textContent = `HSL(${hue}, 70%, 55%)`;
});

// ── Quote Machine ─────────────────────────────────────────────
const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
];

const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const quoteBtn = document.getElementById('quoteBtn');
let lastIndex = -1;

quoteBtn.addEventListener('click', () => {
  let idx;
  do { idx = Math.floor(Math.random() * quotes.length); } while (idx === lastIndex);
  lastIndex = idx;
  const { text, author } = quotes[idx];
  quoteText.style.opacity = 0;
  setTimeout(() => {
    quoteText.textContent = text;
    quoteAuthor.textContent = `— ${author}`;
    quoteText.style.transition = 'opacity 0.4s';
    quoteText.style.opacity = 1;
  }, 200);
});

// ── Click Counter ─────────────────────────────────────────────
const startBtn = document.getElementById('startBtn');
const countDisplay = document.getElementById('countDisplay');
const countStatus = document.getElementById('countStatus');
let count = 0;
let running = false;

startBtn.addEventListener('click', () => {
  if (running) {
    count++;
    countDisplay.textContent = count;
    return;
  }
  // Start a new round
  count = 0;
  running = true;
  countDisplay.textContent = 0;
  countStatus.textContent = 'Go! Go! Go!';
  startBtn.textContent = 'Click me!';

  let timeLeft = 10;
  const interval = setInterval(() => {
    timeLeft--;
    countStatus.textContent = `${timeLeft}s left...`;
    if (timeLeft <= 0) {
      clearInterval(interval);
      running = false;
      startBtn.textContent = 'Try Again!';
      countStatus.textContent = `Time's up! You clicked ${count} times.`;
    }
  }, 1000);
});

// ── Emoji Rain ────────────────────────────────────────────────
const emojiBtn = document.getElementById('emojiBtn');
const emojiStage = document.getElementById('emojiStage');
const emojis = ['🎉', '🌈', '🦄', '🚀', '⭐', '🎸', '🍕', '🐱', '🔥', '💎', '🌊', '🎯'];

emojiBtn.addEventListener('click', () => {
  for (let i = 0; i < 18; i++) {
    setTimeout(() => {
      const el = document.createElement('span');
      el.className = 'emoji-drop';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left = `${Math.random() * 92}%`;
      const duration = 0.8 + Math.random() * 0.8;
      el.style.animation = `fall ${duration}s linear forwards`;
      emojiStage.appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    }, i * 60);
  }
});
