const herstart = document.getElementById("herstart");
const overlay = document.getElementById("bluescreen");
const start = document.getElementById("start");

function moveOverlay() {
  //Dit wordt de funtie om de overlay naar beneden te schuiven
  start.scrollIntoView();
  overlay.classList.toggle("remove");
  start.classList.toggle("noBlur")
  clearInterval(intervalId);
}

var numbers = document.getElementById("numbers");
  var count = 0;
  var intervalId = setInterval(function() {
    numbers.innerHTML = count;
    count++;
    if (count > 100) {
      clearInterval(intervalId);
      moveOverlay();
    }
}, 2000); // 2000 milliseconds = 2 seconds

herstart.addEventListener("click", moveOverlay)

// Buttons
const action_btn = document.getElementById("action-btn");
const info_btn = document.getElementById("info-btn");

action_btn.addEventListener("click", redirectAction)
info_btn.addEventListener("click", redirectInfo)

function redirectAction() {
  window.location.href = "/#";
}

function redirectInfo() {
  window.location.href = "https://www.digitalnatives.nl/diensten/digitale-toegankelijkheid-en-wcag?gclid=Cj0KCQiAq5meBhCyARIsAJrtdr4-Eg5mevtlGmeI2ga4FQBnDx2fYnBSfDZpVeRdaLMTSsmq9Tg8NdkaAmIlEALw_wcB";
}