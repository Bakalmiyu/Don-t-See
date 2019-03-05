document.addEventListener("keydown", function(e){//Useing Keyboard to call other function
    if(e.keyCode === 38){//ArrowUp
        moveup();
    }
    if(e.keyCode === 40){//ArrowDown
        movedown();
    }
    if(e.keyCode === 39){//ArrowRight
        moveright();
    }
    if(e.keyCode === 37){//ArrowLeft
        moveleft();
    }
});

function moveup(){
    document.getElementById("nani").innerHTML = "up";
}
function movedown(){
    document.getElementById("nani").innerHTML = "down";
}
function moveright(){
    document.getElementById("nani").innerHTML = "right";
}
function moveleft(){
    document.getElementById("nani").innerHTML = "left";
}
function maze(){	
	var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	ctx.fillStyle = "#FF0000";   
	ctx.beginPath();
	
	ctx.moveTo(1/4*window.innerWidth,1/4*window.innerHeight);//first line
	ctx.lineTo(3/4*window.innerWidth,1/4*window.innerHeight);
	
	ctx.moveTo(1/4*window.innerWidth,2/4*window.innerHeight);//2nd horizaonral
	ctx.lineTo(3/8*window.innerWidth,2/4*window.innerHeight);
	
	ctx.moveTo(5/8*window.innerWidth,2/4*window.innerHeight);//3rd
	ctx.lineTo(4/4*window.innerWidth,2/4*window.innerHeight);
	
	ctx.moveTo(1/4*window.innerWidth,1/4*window.innerHeight);//linedown left
	ctx.lineTo(1/4*window.innerWidth,1/2*window.innerHeight);
	
	ctx.moveTo(3/8*window.innerWidth,2/4*window.innerHeight);//2nd line
	ctx.lineTo(3/8*window.innerWidth,window.innerHeight);
	
	ctx.moveTo(5/8*window.innerWidth,2/4*window.innerHeight);//3rd line
	ctx.lineTo(5/8*window.innerWidth,window.innerHeight);
	ctx.stroke();
	
}

function main(){
    maze();
}

