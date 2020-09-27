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
    });

    var proNum1 = document.getElementById("firstProNum");
    var proNum2 = document.getElementById("secondProNum");
    var proAnswer = document.getElementById("calcProduct");
    var proResponse = document.getElementById("productOfNums");

    proAnswer.addEventListener("click", function mult(){
        var num1Value = parseFloat(proNum1.value);
        var num2Value = parseFloat(proNum2.value);
        if(proNum1.value.length < 1 || proNum2.value.length < 1) {
            alert("enter a number into both boxes please");
        } else {
            var proOfNums = num1Value * num2Value;
            proResponse.innerText = proOfNums;
        }
    })

    var quoNum1 = document.getElementById("firstQuoNum");
    var quoNum2 = document.getElementById("secondQuoNum");
    var quoAnswer = document.getElementById("calcQuotient");
    var quoResponse = document.getElementById("quotientOfNums");

    quoAnswer.addEventListener("click", function divide(){
        var num1Value = parseFloat(quoNum1.value);
        var num2Value = parseFloat(quoNum2.value);
        if(quoNum1.value.length < 1 || quoNum2.value.length < 1) {
            alert("enter a number into both boxes please");
        } else {
            var quoOfNums = num1Value / num2Value;
            quoResponse.innerText = quoOfNums;
        }
    })
};
