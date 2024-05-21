// Alf.js
function Alf() {}
Alf.prototype.findSpaceship = function(map) {
	let failureText = "Spaceship lost forever."
	let result = [ 0, 0 ]
	let xCoordinate = 0;
	let spaceshipField = 'X'
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

	if (map.includes('\n'))
	{
		result[1]++
	}

	//case where no spaceship was found
	if (foundSpaceship === false)
	{
		result = failureText
	}

	return result
};
