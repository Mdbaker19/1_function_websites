(function (){
        var clickCount = document.getElementById("clicks");
        var numDisplay = document.getElementById("clickNum");
        var double = document.getElementById("doubler");
        var count = 0;

        clickCount.addEventListener("click", function plusCount(){
           count++;
            numDisplay.innerText = count;
        });

        double.addEventListener("click", function doubleIt(){
            count *= 2;
            numDisplay.innerText = count;
        })
})();