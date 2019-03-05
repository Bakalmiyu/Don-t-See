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
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(20, 20);
	ctx.lineTo(20, 100);
	ctx.lineTo(100, 70);
	ctx.stroke();
	
}
