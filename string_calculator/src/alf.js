// Alf.js
function Alf() {}
Alf.prototype.findSpaceship = function(map) {
	let failureText = "Spaceship lost forever."
	if (map.length == 0)
		{
			return failureText
		}
	else return [ 0, 0 ]
};
