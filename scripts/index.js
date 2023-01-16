const herstart = document.getElementById("herstart");
const overlay = document.getElementById("bluescreen");

function moveOverlay() {
  //Dit wordt de funtie om de overlay naar beneden te schuiven
  overlay.classList.toggle("remove");
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

herstart.addEventListener('click', moveOverlay)