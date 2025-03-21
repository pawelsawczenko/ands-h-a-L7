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
