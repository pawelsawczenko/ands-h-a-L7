import "./style.css";
//
// -- H / A - L6 -- 1
//

const runawayBtn = document.querySelector(".runaway-btn");

runawayBtn.style.left = "50%";
runawayBtn.style.top = "50%";

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function randomizeBtnPosition() {
  runawayBtn.style.left = `${randomInteger(0, 100)}%`;
  runawayBtn.style.top = `${randomInteger(0, 100)}%`;
}

runawayBtn.addEventListener("mouseover", () => {
  if (Math.random() < 0.5) {
    randomizeBtnPosition();
  }
});
runawayBtn.addEventListener("click", () => {
  randomizeBtnPosition();
});

//
// -- H / A - L6 -- 2 -- stopwatch
//

const stopwatchItem = document.querySelector(".stopwatch");

const markup = `
          <div id="stopwatch-time">
            <span id="stopwatch-hr">00</span>
            <span>&#58;</span>
            <span id="stopwatch-min">00</span>
            <span>&#58;</span>
            <span id="stopwatch-sec">00</span>
          </div>
          <div id="stopwatch-buttons">
            <button class="btn" id="stopwatch-start">Start</button>
            <button class="btn" disabled id="stopwatch-stop">Stop</button>
            <button class="btn" id="stopwatch-reset">Reset</button>
          </div>
`;

stopwatchItem.insertAdjacentHTML("afterbegin", markup);

const startBtn = document.querySelector("#stopwatch-start");
const stopBtn = document.querySelector("#stopwatch-stop");
const resetBtn = document.querySelector("#stopwatch-reset");

const stopwatchHour = document.querySelector("#stopwatch-hr");
const stopwatchMin = document.querySelector("#stopwatch-min");
const stopwatchSec = document.querySelector("#stopwatch-sec");

let hour = 0;
let minute = 0;
let second = 0;

function stopwatch() {
  second++;

  if (second === 60) {
    minute++;
    second = 0;
  }

  if (minute === 60) {
    hour++;
    minute = 0;
    second = 0;
  }

  let hrStr = hour < 10 ? "0" + hour : hour;
  let minStr = minute < 10 ? "0" + minute : minute;
  let secStr = second < 10 ? "0" + second : second;

  // console.log(`${hrStr}:${minStr}:${secStr}`);
  // console.log("tick");

  stopwatchHour.innerHTML = hrStr;
  stopwatchMin.innerHTML = minStr;
  stopwatchSec.innerHTML = secStr;
}

let stopwatchID;

startBtn.addEventListener("click", () => {
  stopwatchID = setInterval(stopwatch, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
  clearInterval(stopwatchID);

  startBtn.disabled = false;
  stopBtn.disabled = true;
});

resetBtn.addEventListener("click", () => {
  clearInterval(stopwatchID);

  startBtn.disabled = false;
  stopBtn.disabled = true;

  stopwatchHour.innerHTML = "00";
  stopwatchMin.innerHTML = "00";
  stopwatchSec.innerHTML = "00";
  hour = 0;
  minute = 0;
  second = 0;
});

//
// -- H / A - L6 -- 2 -- timer
//
const timerItem = document.querySelector(".timer");

const timerStartBtn = document.querySelector("#timer-start");
const timerStopBtn = document.querySelector("#timer-stop");
const timerResetBtn = document.querySelector("#timer-reset");

const userInput = document.querySelector("#user-input");

const plusSecBtn = document.querySelector("#sec-btn");
const plusMinBtn = document.querySelector("#min-btn");

const timerHour = document.querySelector("#timer-hr");
const timerMin = document.querySelector("#timer-min");
const timerSec = document.querySelector("#timer-sec");

let timerInSeconds = 0;
let timerId;

function timer() {
  if (timerInSeconds === 0) {
    timerHour.innerHTML = "00";
    timerMin.innerHTML = "00";
    timerSec.innerHTML = "00";

    clearInterval(timerId);
    return;
  }

  timerInSeconds--;

  let hour = Math.floor(timerInSeconds / 3600);
  let min = Math.floor(timerInSeconds / 60);
  let sec = timerInSeconds - hour * 3600 - min * 60;

  if (timerInSeconds <= 60) {
    sec = timerInSeconds;
  }

  let hrStr = hour < 10 ? "0" + hour : hour;
  let minStr = min < 10 ? "0" + min : min;
  let secStr = sec < 10 ? "0" + sec : sec;

  // console.log(`${hrStr}:${minStr}:${secStr}`);
  // console.log("tick");

  timerHour.innerHTML = hrStr;
  timerMin.innerHTML = minStr;
  timerSec.innerHTML = secStr;
}

plusSecBtn.addEventListener("click", () => {
  userInput.value = +userInput.value + 30;
});

plusMinBtn.addEventListener("click", () => {
  userInput.value = +userInput.value + 60;
});

timerStartBtn.addEventListener("click", () => {
  if (Number(userInput.value) > 0) {
    if (!timerInSeconds) timerInSeconds = Number(userInput.value);

    timerId = setInterval(timer, 1000);
    userInput.disabled = true;
    plusSecBtn.disabled = true;
    plusMinBtn.disabled = true;

    timerStartBtn.disabled = true;
    timerStopBtn.disabled = false;
  }
});

timerStopBtn.addEventListener("click", () => {
  clearInterval(timerId);

  timerStartBtn.disabled = false;
  timerStopBtn.disabled = true;
});

timerResetBtn.addEventListener("click", () => {
  clearInterval(timerId);

  userInput.disabled = false;
  plusSecBtn.disabled = false;
  plusMinBtn.disabled = false;

  timerStartBtn.disabled = false;
  timerStopBtn.disabled = true;

  userInput.value = 0;
  timerHour.innerHTML = "00";
  timerMin.innerHTML = "00";
  timerSec.innerHTML = "00";
  timerInSeconds = 0;
});

// timerItem.addEventListener("click", (e) => {
//   console.log(e.target.id);

//   if (e.target.id === "sec-btn") {
//     userInput.value = +userInput.value + 30;
//   }

//   if (e.target.id === "min-btn") {
//     userInput.value = +userInput.value + 60;
//   }

//   if (e.target.id === "timer-start") {
//     if (Number(userInput.value) > 0) {
//       if (!timerInSeconds) timerInSeconds = Number(userInput.value);

//       timerId = setInterval(timer, 1000);
//       userInput.disabled = true;
//       plusSecBtn.disabled = true;
//       plusMinBtn.disabled = true;

//       timerStartBtn.disabled = true;
//       timerStopBtn.disabled = false;
//     }
//   }

//   if (e.target.id === "timer-stop") {
//     clearInterval(timerId);

//     timerStartBtn.disabled = false;
//     timerStopBtn.disabled = true;
//   }

//   if (e.target.id === "timer-reset") {
//     clearInterval(timerId);

//     userInput.disabled = false;
//     plusSecBtn.disabled = false;
//     plusMinBtn.disabled = false;

//     timerStartBtn.disabled = false;
//     timerStopBtn.disabled = true;

//     userInput.value = 0;
//     timerHour.innerHTML = "00";
//     timerMin.innerHTML = "00";
//     timerSec.innerHTML = "00";
//     timerInSeconds = 0;
//   }
// });
