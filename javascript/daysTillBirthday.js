(function(){
    let whenBDay = document.getElementById("birthday");
    let findBDay = document.getElementById("calculateBDay");
    let response = document.getElementById("answerSpot");

    findBDay.addEventListener("click", function (){
        const today = new Date();
        console.log(today);
        const birthday = new Date(whenBDay.value);//showing it is 7pm of the day before the day you entered
        console.log(birthday);
        console.log(birthday - today);
        let totalTimeTill = Math.round(birthday - today)/1000;//gives you total amount of time in seconds
        console.log(totalTimeTill);
        let secondsTill = Math.floor(totalTimeTill%60);// want to find however many seconds can not be converted to minutes
        console.log(secondsTill);
        let minutesTill = Math.floor(totalTimeTill/60)%60;// find however many minutes can not be converted to hours
        console.log(minutesTill);
        let hoursTill = Math.floor(totalTimeTill/360)%24;// how many hours can not be converted to days
        console.log(hoursTill);
        let daysTill = Math.floor(totalTimeTill/3600/24);// get the amount of days
        console.log(daysTill);
        response.innerText = (daysTill + " days, " + hoursTill + " hours, " + minutesTill + " minutes, " + secondsTill + " seconds left until your birthday!");
    });
})();