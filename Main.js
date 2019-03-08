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



}
function movedown(){
}
function moveright(){
}
function moveleft(){
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
   
    ctx.moveTo(4/8*window.innerWidth,window.innerHeight-130)
    ctx.lineTo(5/8*window.innerWidth,window.innerHeight-130)
    ctx.font = "30px Arial";//text
    ctx.fillText("Enter",3.5/8*window.innerWidth,innerHeight-170); ctx.fillText("End",7/8*window.innerWidth+50,1/4*window.innerHeight+100)
	ctx.stroke(); 
	
}

function main(){
    maze();
}

