window.onload = function() {
    const num1 = document.getElementById("firstNum");
    const num2 = document.getElementById("secondNum");
    const answer = document.getElementById("calculate");
    const response = document.getElementById("totalOfNums");


    answer.addEventListener("click", function() {
        var num1Value = parseInt(num1.value);
        var num2Value = parseInt(num2.value);
        if(num1.value.length < 1 || num2.value.length < 1){
            alert("enter a number into both boxes please");
    } else
    {
        var sumOfNums = (num1Value + num2Value);
        response.innerText = sumOfNums;
    }
    });
};