// Alf.js
function Alf() {}
Alf.prototype.findSpaceship = function(map) {
	let failureText = "Spaceship lost forever."
	let result = [ 0, 0 ]
	let xCoordinate = 0;
	let yCoordinate = 1;
	let spaceshipField = 'X'
	let lineBreak = '\n'
	let lineBreakRegExp = new RegExp(lineBreak, 'g')
	let foundSpaceship = false;

	//initialize max yCoordinate
	if (map.includes(lineBreak))
	{
		let numberOfLineBreaks = map.match(lineBreakRegExp).length
		result[yCoordinate]+= numberOfLineBreaks
	}

	//looking for spaceship
	for (let i = 0; i < map.length; i++)
	{
		if (map[i] === spaceshipField)
		{
			foundSpaceship = true;
			break;
		}

		if (map[i] === lineBreak)
		{
			result[xCoordinate] = 0
			//go down one yCoordinate (since it is lower in the map)
			result[yCoordinate]--
			//increment i by one more, to skip past the 'n' of '\n'
			i++
		}
		
		result[xCoordinate]++
	}

	

	//case where no spaceship was found
	if (foundSpaceship === false)
	{
		result = failureText
	}

	return result
};
