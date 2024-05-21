// Alf.js
function Alf() {}
Alf.prototype.findSpaceship = function(map) {
	let failureText = "Spaceship lost forever."
	let result = [ 0, 0 ]
	if (map.length === 0)
		{
			result = failureText
		}
	else if (map === '.')
		{
			result = failureText
		}
	return result
};
