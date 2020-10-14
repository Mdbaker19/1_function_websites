(function (){
    const zero = document.getElementById("num0");
    const one = document.getElementById("num1");
    const two = document.getElementById("num2");
    const three = document.getElementById("num3");
    const four = document.getElementById("num4");
    const five = document.getElementById("num5");
    const six = document.getElementById("num6");
    const seven = document.getElementById("num7");
    const eight = document.getElementById("num8");
    const nine = document.getElementById("num9");

    const opAdd = document.getElementById("add");
    let add = false;
    const opSub = document.getElementById("subtract");
    let subtract = false;
    const opPro = document.getElementById("multiply");
    let multiply = false;
    const opQuo = document.getElementById("divide");
    let divide = false;
    const opTotal = document.getElementById("equals");

    const paren = document.getElementById("parenthesis");
    const parenC = document.getElementById("parenClose");
    const decimal = document.getElementById("decimal");
    const clear = document.getElementById("clearScreen");
    const back = document.getElementById("delete");

    const screen = document.getElementById("input");
    const collect = document.getElementById("savedInput");

    opTotal.addEventListener("click", function equals(){
       if(add){
           collect.innerHTML = (Number(collect.innerHTML)) + (Number(screen.innerHTML));
           screen.innerHTML = "";
       }
       if(subtract){
           collect.innerHTML = (Number(collect.innerHTML)) - (Number(screen.innerHTML));
           screen.innerHTML = "";       }
       if(multiply){
           collect.innerHTML = (Number(collect.innerHTML)) * (Number(screen.innerHTML));
           screen.innerHTML = "";       }
       if(divide){
           collect.innerHTML = (Number(collect.innerHTML)) / (Number(screen.innerHTML));
           screen.innerHTML = "";       }
    });
    paren.addEventListener("click", function addParen(){
       screen.innerHTML += "(";
    });
    parenC.addEventListener("click", function closeParen(){
        screen.innerHTML += ")";
    });
    clear.addEventListener("click", function clearScreen(){
       screen.innerHTML = "";
       collect.innerHTML = "";
    });
    opAdd.addEventListener("click", function addNum(){
        collect.innerHTML = screen.innerHTML;
        screen.innerHTML = "";
        add = true;
    });
    opSub.addEventListener("click", function subNum(){
        collect.innerHTML = screen.innerHTML;
        screen.innerHTML = "";
        subtract = true;
    });
    opPro.addEventListener("click", function multNum(){
        collect.innerHTML = screen.innerHTML;
        screen.innerHTML = "";
        multiply = true;
    });
    opQuo.addEventListener("click", function divNum(){
        collect.innerHTML = screen.innerHTML;
        screen.innerHTML = "";
        divide = true;
    });
    decimal.addEventListener("click", function fill(){
        screen.innerHTML += ".";
    });
    back.addEventListener("click", function dele(){
        screen.innerHTML -= screen.innerHTML[screen.innerHTML.length-1];
    });
    zero.addEventListener("click", function fill(){
       screen.innerHTML += 0;
    });
    one.addEventListener("click", function fill(){
        screen.innerHTML += 1;
    });
    two.addEventListener("click", function fill(){
        screen.innerHTML += 2;
    });
    three.addEventListener("click", function fill(){
        screen.innerHTML += 3;
    });
    four.addEventListener("click", function fill(){
        screen.innerHTML += 4;
    });
    five.addEventListener("click", function fill(){
        screen.innerHTML += 5;
    });
    six.addEventListener("click", function fill(){
        screen.innerHTML += 6;
    });
    seven.addEventListener("click", function fill(){
        screen.innerHTML += 7;
    });
    eight.addEventListener("click", function fill(){
        screen.innerHTML += 8;
    });
    nine.addEventListener("click", function fill(){
        screen.innerHTML += 9;
    });
})();