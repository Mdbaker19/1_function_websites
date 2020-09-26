window.onload = function calcNums () {
    var addNum1 = document.getElementById("firstNum");
    var addNum2 = document.getElementById("secondNum");
    var addAnswer = document.getElementById("calculate");
    var addResponse = document.getElementById("totalOfNums");


    addAnswer.addEventListener("click", function add () {
        var num1Value = parseFloat(addNum1.value);
        var num2Value = parseFloat(addNum2.value);
        if(addNum1.value.length < 1 || addNum2.value.length < 1) {
            alert("enter a number into both boxes please");
    } else
    {
        var sumOfNums = (num1Value + num2Value);
        addResponse.innerText = sumOfNums;
    }
    });

    var subNum1 = document.getElementById("firstSubNum");
    var subNum2 = document.getElementById("secondSubNum");
    var subAnswer = document.getElementById("calcSub");
    var subResponse = document.getElementById("differenceOfNums");

    subAnswer.addEventListener("click", function sub() {
        var num1Value = parseFloat(subNum1.value);
        var num2Value = parseFloat(subNum2.value);
        if(subNum1.value.length < 1 || subNum2.value.length < 1) {
            alert("enter a number into both boxes please");
        } else {
            var diffOfNums = (num1Value - num2Value);
            subResponse.innerText = diffOfNums;
        }
    })
};
