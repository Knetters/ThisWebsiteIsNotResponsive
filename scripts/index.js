function moveOverlay() {
    //Dit wordt de funtie om de overlay naar beneden te schuiven
    alert("Overlay weg.")
}

var numbers = document.getElementById("numbers");
var count = 0;
setInterval(function() {
    numbers.innerHTML = count;
    count++;
    if (count > 100) {
        clearInterval();
        moveOverlay();
    }
}, 2000); // 2000 milliseconds = 2 seconds