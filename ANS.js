

const originalDistance = 5
const originalSoundLevel = 100


function seed(mazefile) {
	//FIXME: load in the maze map
}

function soundLevel(event) {
	var destination = Math.sqrt(Math.pow((player.posX - event.posX),2) - Math.pow((player.posY - event.posY),2))
	var soundDeductionCoeff = destination/originalDistance
	var soundDeductionCoeff = Math.log(soundDeductionCoeff)/Math.log(2)
	return originalSoundLevel - 6*soundDeductionCoeff
}

function isCollide(argument) {
	
}
