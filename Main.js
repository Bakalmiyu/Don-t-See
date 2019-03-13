x = 4.28/8*window.innerWidth
y = window.innerHeight*2.8/4
document.addEventListener("keydown", function(e){//Useing Keyboard to call other function
    if(e.keyCode === 38){//ArrowUp
        collide();
        moveup();
    }
    if(e.keyCode === 40){//ArrowDown
        collide();
        movedown();

    }
    if(e.keyCode === 39){//ArrowRight
        collide();
        moveright();

    }
    if(e.keyCode === 37){//ArrowLeft
        collide();
        moveleft();

    }
});
function drawpic(x,y){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = new Image()
    img.src = "Black-dot-1.png"
    ctx.drawImage(img,x,y);
}
function del(){
    var ctx = document.getElementById("myCanvas").getContext("2d")
    var canvas = document.getElementById("myCanvas");
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
//var mazefile = seed()
function moveup(){
    del();
    maze();
    drawpic(x,y-10);
    y = y-10;
}
function movedown(){ 
    del();
    maze();
    drawpic(x,y+10);
    y = y+10;
}
function moveright(){
    del();
    maze();
    drawpic(x+10,y);
    x+=10;
}
function moveleft(){
    del();
    maze();
    drawpic(x-10,y);
    x-=10;
}
function collide(){
    drawpic(1/2*window.innerWidth,1/4*window.innerHeight-150)
    if(y == 2/4*window.innerHeight && x >= 1/4*window.innerHeight && x <= 1/2*window.innerHeight){
        moveup();
    }
    if(1/4*window.innerHeight-150 > y){//1st horizaontal
        movedown();
    }
    if(window.innerHeight-220 < y){//2nd
        moveup();
    }
    if(1/4*window.innerWidth > x){//1st line down from left
        moveright();
    }

}
function maze(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.fillStyle = "#FF0000";   
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(1/4*window.innerWidth,1/4*window.innerHeight-150);//first line
    ctx.lineTo(window.innerWidth,1/4*window.innerHeight-150);

    ctx.moveTo(1/4*window.innerWidth,2/4*window.innerHeight-150);//2nd horizaonral
    ctx.lineTo(1/2*window.innerWidth,2/4*window.innerHeight-150);

    ctx.moveTo(5/8*window.innerWidth,2/4*window.innerHeight-150);//3rd horizontal
    ctx.lineTo(4/4*window.innerWidth,2/4*window.innerHeight-150);

    ctx.moveTo(1/4*window.innerWidth,1/4*window.innerHeight-150);//linedown left
    ctx.lineTo(1/4*window.innerWidth,1/2*window.innerHeight-150);

    ctx.moveTo(4/8*window.innerWidth,2/4*window.innerHeight-150);//2nd line
    ctx.lineTo(4/8*window.innerWidth,window.innerHeight-130);

    ctx.moveTo(5/8*window.innerWidth,2/4*window.innerHeight-150);//3rd line
    ctx.lineTo(5/8*window.innerWidth,window.innerHeight-130);

    ctx.moveTo(4/8*window.innerWidth,window.innerHeight-130);
    ctx.lineTo(5/8*window.innerWidth,window.innerHeight-130);
    ctx.font = "30px Arial";//text
    ctx.fillText("Enter",3.5/8*window.innerWidth,innerHeight-170); ctx.fillText("End",7/8*window.innerWidth+50,1/4*window.innerHeight+100);
    ctx.stroke();
}
function audio(){
    var forest = new Audio('forest.mp3');
    forest.loop = true;
    forest.play();
}

function main(){//when don't see load use this
    maze();
    drawpic(x,y);
    audio();
}

