const gradDay = "10 Feb 2021";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const beginEl = document.getElementById("initialize");

function countDown() {
    const currentDate = new Date();
    const gradDate = new Date(gradDay);

    const seconds = (gradDate - currentDate) / 1000;

    const minutes = Math.floor(seconds / 60) % 60;

    const secondsLeft = Math.floor(seconds % 60);

    const hours = Math.floor(seconds / 360) % 24;

    const days = Math.floor(seconds / 3600 / 24);

    //having issues making the button start an updating countdown, have to click it each time
    //beginEl.addEventListener("click", function start() {
        daysEl.innerHTML = days;
        hoursEl.innerHTML = hours;
        minutesEl.innerHTML = minutes;
        secondsEl.innerHTML = secondsLeft;
   // });
}

countDown();

//every second
setInterval(countDown, 1000);

