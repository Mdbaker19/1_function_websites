const gradDay = "30 March 2021";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const beginEl = document.getElementById("initialize");//not in use right now

function countDown() {
    const currentDate = new Date();
    const gradDate = new Date(gradDay);

    const seconds = (gradDate - currentDate) / 1000;//to calculate everything off of

    const minutes = Math.floor(seconds / 60) % 60;//whatever can not be converted to hours with % 60 is minutes is minutes left to display

    const secondsLeft = Math.floor(seconds % 60);//whatever can not be converted to minutes with % 60 is seconds left to display

    const hours = Math.floor(seconds / 360) % 24;//whatever can not be converted to days with % 24 is hours left to display

    const days = Math.floor(seconds / 3600 / 24);// needs no % as this is the highest parent number to be shown

    //having issues making the button start an updating countdown, have to click it each time
    //beginEl.addEventListener("click", function start() {
        daysEl.innerHTML = days;
        hoursEl.innerHTML = hours;
        minutesEl.innerHTML = minutes;
        secondsEl.innerHTML = addedZero(secondsLeft);
   // });
}
function addedZero(time){
    if(time < 10) {
        return `0${time}`;
    } else return time;
}
countDown();

//every second
setInterval(countDown, 1000);

