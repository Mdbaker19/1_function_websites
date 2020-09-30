var canvas;

var canvasContext;


window.onload = function(){
    //run code as soon as the window loads, the canvas and elements
    canvas= document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");

    drawEverything();
}


function drawEverything(){
    canvasContext.fillStyle = "aliceblue";
    //filling from 0 and 0 coordinates top left, width and height is bottom right of canvas
    canvasContext.fillRect(0,0,canvas.width, canvas.height);

    canvasContext.fillStyle = "black";
    canvasContext.fillRect(10, 250, 25, 80);

    canvasContext.fillStyle = "black";
    canvasContext.fillRect(765, 250, 25, 80);

    canvasContext.fillStyle = "red";
    canvasContext.fillRect(395, 295, 10, 10)

}