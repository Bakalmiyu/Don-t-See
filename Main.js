x = 4.28/8*window.innerWidth
y = window.innerHeight*2.8/4
var collision = new Audio('impact.wav').volume = 1;
var footstep = new Audio('forestwalk.wav').volume = 1;
var victory = new Audio('victory.flac').volume = 1;
document.addEventListener("keydown", function(e){//Useing Keyboard to call other function
    if(e.keyCode === 38){//ArrowUp
        footstep.play();
        moveup();
    }
    if(e.keyCode === 40){//ArrowDown
        footstep.play();
        movedown();

    }
    if(e.keyCode === 39){//ArrowRight
        footstep.play();
        moveright();

    }
    if(e.keyCode === 37){//ArrowLeft
        footstep.play();
        moveleft();
    }
});
function drawpic(x,y){
    console.log("X=",x,"Y=",y);
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
function moveup(){
    if((y-10)<37.799999999999955)
    {collision.play();}
    else{
        del();
        maze();
        drawpic(x,y-8);
        y = y-8;
    }
}
function movedown(){ 
    if((y+8)>537.8)
    {collision.play();}
    else if((y+8)>137.799999999999955&&(x>=381.76&&x<=761.76)){
        collision.play(); 
    }
    else if((y+8)>137.799999999999955&&(x>=871.76&&x<=1431.76)){
        collision.play(); 
    }
    else{
        del();
        maze();
        drawpic(x,y+8);
        y = y+8;}

}
function moveright(){
    if(((x+8)>861.76 &&(y>=147.799999999999955 && y<=537.8 ))){
        collision.play(); 
    }
    else if(((x+8)>1431.76 &&(y>=37.799999999999955 && y<=137.799999999999955 ))){
        victory.play();
        alert("You Won. Play Again?"); 
        location.reload();
    }
    else{
        del();
        maze();
        drawpic(x+8,y);
        x+=8;}
}
function moveleft(){
    if((x-8)<381.76 &&(y>=37.799999999999955 && y<=137.799999999999955 ))
    {collision.play();}
    else if(((x-8)<771.76 &&(y>=147.799999999999955 && y<=537.8 ))){
        collision.play(); 
    }
    else{
        del();
        maze();
        drawpic(x-8,y);
        x-=8;

    }
}
function maze(){	
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.fillStyle = "#FF0000";   
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
    forest.volume = 0.3
}

function main(){//when don't see load use this
    drawpic(x,y);
    maze();
    audio();
}

