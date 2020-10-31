(function(){
    let cvs = document.getElementById("art");
    let ctx = cvs.getContext("2d");
    let collision = 0;
    const line = {
        x: cvs.width/2,
        y: cvs.height/2,
        r: 1.5,
        xs: 2.01,
        ys: 1.99,
        c: "#ffffff",
        move: function(){
            this.x += this.xs;
            this.y -= this.ys;
        }
    }
    function run(){
        draw();
        line.move();
        redirect();
    }
    setInterval(run, 20);
    function draw(){
        fillC(line.x, line.y, line.r, line.c);
    }
    function fillC(cX, cY, r, c){
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.arc(cX, cY, r, 0, Math.PI*2, true);
        ctx.fill();
    }
    function redirect(){
        if(line.x <= 0){
            line.xs = -line.xs;
            line.c = randomColor();
        }
        if(line.y <= 0){
            line.ys = -line.ys;
            line.c = randomColor();
        }
        if(line.x >= cvs.width){
            line.xs = -line.xs;
            line.c = randomColor();
        }
        if(line.y >= cvs.height){
            line.ys = -line.ys;
            line.c = randomColor();
        }
    }
    function randomColor(){
        collision++;
        console.log(collision + " cycles");
        let output = "#";
        let chars = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        for(let i = 0; i < 6; i++){
            let ran = Math.floor(Math.random()*15)+1;
            output+=chars[ran];
        }
        return output;
    }
})();