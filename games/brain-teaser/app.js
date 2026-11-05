const COLORS = ["yellow", "red", "green", "blue", "brown", "black", "purple", "orange"];
const MAX_WORDS = 200;

const container = document.querySelector(".container");
const numberInput = document.querySelector("#numberInput");
const durationInput = document.querySelector("#durationInput");
const resetBtn = document.querySelector("#resetBtn");
const startChallengeBtn = document.querySelector("#startChallengeBtn");
const matchBtn = document.querySelector("#matchBtn");
const mismatchBtn = document.querySelector("#mismatchBtn");

const timeLeftEl = document.querySelector("#timeLeft");
const scoreValueEl = document.querySelector("#scoreValue");
const streakValueEl = document.querySelector("#streakValue");
const challengeCardEl = document.querySelector("#challengeCard");

const challengeState = {
  isRunning: false,
  timerId: null,
  timeLeft: 0,
  score: 0,
  streak: 0,
  round: null,
};

const random = (range) => Math.floor(Math.random() * range);

const clampWordCount = (value) => {
  const asNumber = Number(value);
  if (!Number.isFinite(asNumber) || asNumber < 1) return 1;
  return Math.min(Math.trunc(asNumber), MAX_WORDS);
};

const generateSpans = (wordCount) => {
  const safeCount = clampWordCount(wordCount);
  numberInput.value = safeCount.toString();

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < safeCount; i += 1) {
    const span = document.createElement("span");
    span.textContent = COLORS[random(COLORS.length)];
    span.style.color = COLORS[random(COLORS.length)];
    fragment.appendChild(span);
  }

  container.replaceChildren(fragment);
};

const setChallengeButtonsDisabled = (disabled) => {
  matchBtn.disabled = disabled;
  mismatchBtn.disabled = disabled;
};

const updateChallengeReadout = () => {
  timeLeftEl.textContent = challengeState.timeLeft.toString();
  scoreValueEl.textContent = challengeState.score.toString();
  streakValueEl.textContent = challengeState.streak.toString();
};

const createRound = () => {
  const text = COLORS[random(COLORS.length)];
  const isMatch = Math.random() < 0.5;
  const color = isMatch ? text : COLORS[random(COLORS.length)];
  return { text, color, isMatch: text === color };
};

const renderRound = () => {
  challengeState.round = createRound();
  challengeCardEl.textContent = challengeState.round.text;
  challengeCardEl.style.color = challengeState.round.color;
};

const stopChallenge = () => {
  if (challengeState.timerId) {
    window.clearInterval(challengeState.timerId);
    challengeState.timerId = null;
  }
  challengeState.isRunning = false;
  setChallengeButtonsDisabled(true);
  challengeCardEl.style.color = "#1a1a1a";
  challengeCardEl.textContent = `Time's up! Final score: ${challengeState.score}`;
};

const tick = () => {
  challengeState.timeLeft -= 1;
  updateChallengeReadout();
  if (challengeState.timeLeft <= 0) {
    stopChallenge();
  }
};

const startChallenge = () => {
  if (challengeState.timerId) {
    window.clearInterval(challengeState.timerId);
  }

  challengeState.timeLeft = Math.max(10, Number(durationInput.value) || 45);
  durationInput.value = challengeState.timeLeft.toString();
  challengeState.score = 0;
  challengeState.streak = 0;
  challengeState.round = null;
  challengeState.isRunning = true;

  setChallengeButtonsDisabled(false);
  updateChallengeReadout();
  renderRound();

  challengeState.timerId = window.setInterval(tick, 1000);
};

const handleAnswer = (playerSaysMatch) => {
  if (!challengeState.isRunning || !challengeState.round) {
    return;
  }

  const isCorrect = playerSaysMatch === challengeState.round.isMatch;
  if (isCorrect) {
    challengeState.streak += 1;
    challengeState.score += 10 + Math.min(challengeState.streak, 10);
  } else {
    challengeState.streak = 0;
    challengeState.score = Math.max(0, challengeState.score - 5);
  }

  updateChallengeReadout();
  renderRound();
};

numberInput.addEventListener("input", (event) => {
  generateSpans(event.target.value);
});

resetBtn.addEventListener("click", () => {
  generateSpans(numberInput.value);
});

startChallengeBtn.addEventListener("click", startChallenge);
matchBtn.addEventListener("click", () => handleAnswer(true));
mismatchBtn.addEventListener("click", () => handleAnswer(false));

window.addEventListener("keydown", (event) => {
  if (!challengeState.isRunning) return;

  const key = event.key.toLowerCase();
  if (key === "m") {
    handleAnswer(true);
  }
  if (key === "n") {
    handleAnswer(false);
  }
});

generateSpans(numberInput.value);
updateChallengeReadout();
