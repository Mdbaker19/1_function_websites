window.onload = function generateNums () {
    var createNums = document.getElementById("start");
    var firstNum = document.getElementById("number1");
    var secondNum = document.getElementById("number2");
    var operator = document.getElementById("operator");
    var checkAnswer = document.getElementById("submit");
    var inputAnswer = document.getElementById("response");
    var isCorrect = document.getElementById("correct");


    createNums.addEventListener("click", function begin() {
        const one = Math.floor((Math.random() * 100) + 1);
        const two = Math.floor((Math.random() * 100) + 1);
        const operators = ["+", "-", "/", "*"];
        const randomOpNum = Math.floor(Math.random()*operators.length-1) + 1;

        firstNum.innerText = one;
        operator.innerText = operators[randomOpNum];
        secondNum.innerText = two;
        inputAnswer.innerHTML = "";// does not clear the text box;

        checkAnswer.addEventListener("click", function verifyAnswer() {
            let total;
            if(randomOpNum === 0){
                total = one + two;
            } else if(randomOpNum === 1) {
                total = one - two;
            } else if(randomOpNum === 2) {
                total = one / two;
            } else total = one * two;
            const yourTotal = parseFloat(inputAnswer.value);
            if (yourTotal === total) {
                isCorrect.innerText = "Correct";
            } else {
                isCorrect.innerText = "Try again";
            }
        })

    })
};