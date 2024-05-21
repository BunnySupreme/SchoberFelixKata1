// Alf.js
function Alf() {}
Alf.prototype.findSpaceship = function(map) {
	let failureText = "Spaceship lost forever."
	let result = [ 0, 0 ]
	let emptyField = '.'
	if (map.length === 0 || map === emptyField)
		{
			result = failureText
		}

	return result
};
