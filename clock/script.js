const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');


function clockTick(){
    const date = new Date();
    const seconds = date.getSeconds()/60;
    const minutes = (seconds+date.getMinutes())/60;
    const hours = (minutes+date.getHours())/12;

    rotateClockHand(secondHand,seconds);
    rotateClockHand(minuteHand,minutes);
    rotateClockHand(hourHand,hours);

}
function rotateClockHand(element ,rotation){
    element.style.setProperty('--rotate',rotation*360);
}
setInterval(clockTick,1000);


function updateClock() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // // Pad single digits with leading zeros if necessary
    const formattedHour = hour.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    // Update the HTML elements
    document.getElementById("hour").textContent = formattedHour;
    document.getElementById("minutes").textContent = formattedMinutes;
    document.getElementById("sec").textContent = formattedSeconds;
}

// Call the updateClock function immediately to display the current time
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

