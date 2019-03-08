

const originalDistance = 5
const originalSoundLevel = 100


function seed(mazefile) {
	//FIXME: load in the maze map
}

function soundLevel(event) {
	var destination = Math.sqrt(Math.pow((player.posX - event.posX),2) - Math.pow((player.posY - event.posY),2))
	var soundDeductionCoeff = destination/originalDistance
	var soundDeductionCoeff = Math.log(soundDeductionCoeff)/Math.log(2)
	return Math.pow(10,6*soundDeductionCoeff/20)
}

function isCollide(posX, posY, maze = mazefile) {
	for (x = 0, x > mazefile.length, x++){
		if (posX = mazefile[x]) {
			for (var y = 0; y < mazefile[x].length; y++) {
				if (mazefile[x][y] == posY) {
					return True
				}
			}
		}
	}
	//FIXME: add a more general approach to include character?
	return False
}
