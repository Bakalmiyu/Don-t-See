

const originalDistance = 5;
const originalSoundLevel = 100;
//support functions
function rgbToHex(colors) {
	// body...
	return (colors[0] << 16 | colors[1] << 8 | colors[2]).toString(16);

}

function seed() {
	//FIXME: load in the maze map
	maze = document.getElementById('myCanvas');
	ctx = maze.getContext('2d');
	mazefile = [];
	for (var x = 0; x < maze.width; x++) {
		mazefile[x] = []
		for (var y = 0; y < maze.height; y++) {
			colorCode = ctx.getImageData(x,y,1,1).data;
			Hex = rgbToHex(colorCode);
			mazefile[x, y] = '#' + Hex;
		}
	}
}

function soundLevel(event) {
	var destination = Math.sqrt(Math.pow((player.posX - event.posX),2) - Math.pow((player.posY - event.posY),2));
	var soundDeductionCoeff = destination/originalDistance;
	var soundDeductionCoeff = Math.log(soundDeductionCoeff)/Math.log(2);
	return Math.pow(10,6*soundDeductionCoeff/20);
}

function isCollide(posX, posY, maze = mazefile) {
	for (x = 0, x > mazefile.length, x++){
		if (posX = mazefile[x]) {
			for (var y = 0; y < mazefile[x].length; y++) {
				if (mazefile[x][y] == posY) {
					return True;
				}
			}
		}
	}
	//FIXME: add a more general approach to include character?
	return False
}
