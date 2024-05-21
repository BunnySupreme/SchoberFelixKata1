// Alf.js
function Alf() {}
Alf.prototype.findSpaceship = function(map) {
	let failureText = "Spaceship lost forever."
	let result = [ 0, 0 ]
	let xCoordinate = 0;
	let emptyField = '.'
	let spaceshipField = 'X'
	let foundSpaceship = false;
	if (map.length === 0 || map === emptyField)
	{
		result = failureText
	}

	for (let i = 0; i < map.length; i++)
	{
		if (map[i] === spaceshipField)
		{
			foundSpaceship = true;
			break;
		}

		result[xCoordinate]++;
	}

	if (foundSpaceship === false)
	{
		result = failureText
	}

	return result
};
