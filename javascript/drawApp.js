(function (){
    const cvs = document.getElementById("canvas");
    const cc = cvs.getContext("2d");
    let erase = document.getElementById("clear");
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");

    const blue = document.getElementById("blue");
    const red = document.getElementById("red");
    const yellow = document.getElementById("yellow");
    const green = document.getElementById("green");
    const random = document.getElementById("ranColor");

    let clickCounter = 0;
    let size = 5;
    let color = "#000000";
    window.onload = function (){
        draw();
    };
    function draw(){
        fill(0, 0, cvs.width, cvs.height, "#cce0e2");
    }
    function fill(lx, ty, w, h, c){
        cc.fillStyle = c;
        cc.fillRect(lx, ty, w, h);
    }
    blue.addEventListener("click", function (){
        color = "blue";
        clickCounter--;
    });
    red.addEventListener("click", function (){
        color = "red";
        clickCounter--;
    });
    yellow.addEventListener("click", function (){
        color = "yellow";
        clickCounter--;
    });
    green.addEventListener("click", function (){
        color = "green";
        clickCounter--;
    });
    random.addEventListener("click", function (){
        color = ranColor();
        clickCounter--;
    });
    plus.addEventListener("click", function(){
        size++;
        clickCounter--;
    });
    minus.addEventListener("click", function (){
        size--;
        clickCounter--;
    });
    erase.addEventListener("click", function(){
        draw();
        clickCounter--;
    });
    window.addEventListener("click", function (){
        clickCounter++;
        window.addEventListener("mousemove", function (e) {
            let x = e.x;
            let y = e.y;
            if(clickCounter % 2 !== 0) {
                fill(x-(size/2), y-(size/2), size, size, color);
            }
        });
    });
    function ranColor(){
        let output = "#";
        const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];
        for(let i = 0; i < 6; i++){
            let ranNum = Math.floor(Math.random() * options.length-1) + 1;
            output+=(options[ranNum]);
        }
        return output;
    }
})();