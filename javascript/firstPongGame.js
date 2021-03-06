(function() {

    var playerScore = document.getElementById("p1score");
    var compScore = document.getElementById("computerscore");

    var p1Points = Number(playerScore);
    var compPoints = Number(compScore);

    var showPlayerScore = document.getElementById("player1scorespot");
    var showComputerScore = document.getElementById("computerscorespot");

    showPlayerScore.innerText = p1Points;
    showComputerScore.innerText = compPoints;

    var canvas;

    var canvasContext;

//x axis for ball
//canvas is 800 wide and 600 tall
    let ballX = Math.floor(Math.random() * 20) + 380;

//y axis for ball
    let ballY = Math.floor(Math.random() * 50) + 275;

    let ballSpeedX = 15;

    let ballSpeedY = 5;


//to be used in the key movements listener
    let paddlePlayer1;

//to be used in the draw code function in pair with the add event listner mousemove
    let paddle1Y = 300;

//for player computer
    let paddle2Y = 320;
// const in capital so you know it is a const
    const PADDLE_HEIGHT = 80;


    window.onload = function(){
        //run code as soon as the window loads, the canvas and elements
        canvas= document.getElementById("gameCanvas");
        canvasContext = canvas.getContext("2d");

        var framesPerSecond = 30;
        setInterval(callFunctions, 1000/framesPerSecond);


        window.addEventListener('keydown', ((evt) => {
            const direction = evt.key.replace('Arrow', '');
            paddlePlayer1 = movePaddles(direction);
        }))
    }


//for the setInterval
    function callFunctions(){
        moveEverything();
        drawEverything();
        aiComputer();
    }





    function movePaddles(direction){
        switch(direction) {
            case 'Up':
                paddle1Y -= 20;
                break;
            case 'Down':
                paddle1Y += 20;
                break;
        }
    }





    function ballReset(){
        //taken from previous use to reset direction after reset
        ballSpeedX = -ballSpeedX;
        ballX = Math.floor(Math.random() * 20) + 380;
        ballY = Math.floor(Math.random() * 50) + 275;
    }





    function moveEverything(){
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        //hitting computer paddle
        if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT && ballX === 765) {
            ballSpeedX = -ballSpeedX;
        } else if(ballX > canvas.width){
            ballReset();
        }

        //hitting player paddle
        if (ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT && ballX === 10) {
            ballSpeedX = -ballSpeedX;
        } else if(ballX <= 0){
            ballReset();
        }

        //hitting bottom end
        if(ballY > canvas.height){
            ballSpeedY = -ballSpeedY;
        }

        //hitting top end
        if(ballY <= 0){
            ballSpeedY = -ballSpeedY;
        }
    }







    function aiComputer(){
        if(ballY > paddle2Y) {
            paddle2Y += 20;
        } if(ballY < paddle2Y){
            paddle2Y -= 20;
        }
    }


//ran 1sec/fps times a second from setInterval in the onload 
    function drawEverything(){

        // canvasContext.fillStyle = "aliceblue";
        //filling from 0 and 0 coordinates top left, width and height is bottom right of canvas
        // canvasContext.fillRect(0,0,canvas.width, canvas.height);

        //order of these does matter, want this divider line to be below the ball when it passes over
        // canvasContext.fillStyle = "green";
        // canvasContext.fillRect(397.5, 0, 5, canvas.height);

        // canvasContext.fillStyle = "black";
        // canvasContext.fillRect(10, 250, 15, 80);

        // canvasContext.fillStyle = "black";
        // canvasContext.fillRect(765, 250, 15, 80);

        // canvasContext.fillStyle = "red";
        // canvasContext.fillRect(ballX, ballY, 10, 10)


        //clean up the lines above with the colorRect function added below!!
        //background
        colorRect(0, 0, canvas.width, canvas.height, "aliceblue");
        //divider line
        colorRect(397.5, 0, 5, canvas.height, "green");
        //now make it a circle:
        colorCircle(ballX, ballY, 8, "red");
        //paddle left player1
        colorRect(10, paddle1Y, 15, PADDLE_HEIGHT, "black");
        //paddle right
        colorRect(765, paddle2Y, 15, PADDLE_HEIGHT, "black");
        //ball
        //From a rectangle: colorRect(ballX, ballY, 10, 10, "red");




    }

//to clean up the drawEverything function 
    function colorRect(leftX, topY, width, height, color){
        canvasContext.fillStyle = color;
        canvasContext.fillRect(leftX, topY, width, height);


    }


// to clean up the circle creation for the ball 
//the ending 0, Math.PI *2 and true are always with the draw circle so no need to include the parameters
    function colorCircle(centerX, centerY, radius, color){
        // canvasContext.fillStyle = "red";

        // canvasContext.beginPath();
        //x, y as center of circle, radius, angles and radians, if math.pi was not * 2 it would display a half circle lastly it is clockwise filling
        //so if it were to be false and the math.pi was not mult by 2 it would draw bottom half. if it were true with math.pi not * 2 it would draw top half
        // canvasContext.arc(ballX, ballY, 8, 0, Math.PI*2, true);
        // canvasContext.fill();
        canvasContext.fillStyle = color;
        canvasContext.beginPath();
        canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
        canvasContext.fill();
    }


})();