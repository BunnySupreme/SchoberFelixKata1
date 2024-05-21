// Alf.js
function Alf() {}
Alf.prototype.findSpaceship = function(map) {
	let failureText = "Spaceship lost forever."
	let invalidInputText = "Invalid input"
	let result = [ 0, 0 ]
	let xCoordinate = 0;
	let yCoordinate = 1;
	let emptyField = '.'
	let spaceshipField = 'X'
	let lineBreak = '\n'
	let lineBreakRegExp = new RegExp(lineBreak, 'g')
	let disallowedChars = new RegExp(`[^${emptyField}${spaceshipField}${lineBreak}]`);
	let foundSpaceship = false;

	if (disallowedChars.test(map))
	{
		result = invalidInputText
	}
	else if ((map.match(new RegExp(spaceshipField, 'g')) || []).length > 1) 
	{
		result = invalidInputText;
	}
	else 
	{
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
	}

	

	return result
};
