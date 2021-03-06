const originalDistance = 5;
const originalSoundLevel = 100;
//support functions
function rgbToHex(colors) {
	return (colors[0] << 16 | colors[1] << 8 | colors[2]).toString(16);
}


//real function
function seed() {
	var maze = document.getElementById('myCanvas');
	var ctx = maze.getContext('2d');
	mazefile = [];
	for (var x = 0; x < maze.width; x++) {
		mazefile[x] = [];
		for (var y = 0; y < maze.height; y++) {
			colorCode = ctx.getImageData(x,y,1,1).data;
			Hex = rgbToHex(colorCode);
			mazefile[x, y] = '#' + Hex;
		}
	}
	return mazefile
}

function soundLevel(event) {
	var destination = Math.sqrt(Math.pow((player.posX - event.posX),2) - Math.pow((player.posY - event.posY),2));
	var soundDeductionCoeff = destination/originalDistance;
	var soundDeductionCoeff = Math.log(soundDeductionCoeff)/Math.log(2);
	return Math.pow(10,6*soundDeductionCoeff/20);
}

function isCollide(posX, posY, maze = mazefile) {
	posXInted = Math.ceil(posX);
	posYInted = Math.ceil(posY);
	if (maze[posXInted, posYInted] == '#000000'){
		var collision = new Audio('welcome.mp3'); //Add collision sound here
		collision.play();
		return true;
	}
	return false;
}
