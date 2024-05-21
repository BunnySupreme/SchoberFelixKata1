// Alf.js
function Alf() {}
Alf.prototype.findSpaceship = function(map) {
	let failureText = "Spaceship lost forever."
	let result = [ 0, 0 ]
	let xCoordinate = 0;
	let yCoordinate = 1;
	let spaceshipField = 'X'
	let lineBreak = '\n'
	let foundSpaceship = false;

	//looking for spaceship
	for (let i = 0; i < map.length; i++)
	{
		if (map[i] === spaceshipField)
		{
			foundSpaceship = true;
			break;
		}
		
		result[xCoordinate]++;
	}

	if (map.includes(lineBreak))
	{
		result[yCoordinate]++
	}

	//case where no spaceship was found
	if (foundSpaceship === false)
	{
		result = failureText
	}

	return result
};
