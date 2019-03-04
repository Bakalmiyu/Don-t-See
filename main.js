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