window.onload = function calcNums () {
    var num1 = document.getElementById("firstNum");
    var num2 = document.getElementById("secondNum");
    var answer = document.getElementById("calculate");
    var response = document.getElementById("totalOfNums");


    answer.addEventListener("click", function add () {
        var num1Value = parseInt(num1.value);
        var num2Value = parseInt(num2.value);
        if(num1.value.length < 1 || num2.value.length < 1) {
            alert("enter a number into both boxes please");
    } else
    {
        var sumOfNums = (num1Value + num2Value);
        response.innerText = sumOfNums;
    }
    });

    var subNum1 = document.getElementById("firstSubNum");
    var subNum2 = document.getElementById("secondSubNum");
    var subAnswer = document.getElementById("calcSub");
    var subResponse = document.getElementById("differenceOfNums");

    subAnswer.addEventListener("click", function sub() {
        var num1Value = parseInt(subNum1.value);
        var num2Value = parseInt(subNum2.value);
        if(subNum1.value.length < 1 || subNum2.value.length < 1) {
            alert("enter a number into both boxes please");
        } else {
            var diffOfNums = (num1Value - num2Value);
            subResponse.innerText = diffOfNums;
        }
    })
};
