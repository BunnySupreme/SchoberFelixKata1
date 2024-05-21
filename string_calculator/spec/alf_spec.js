describe('Alf', function() {
	beforeEach(function() {
		alf = new Alf();
	});
    it('should return "Spaceship lost forever." for an empty string', function() {
		expect(alf.findSpaceship('')).toEqual("Spaceship lost forever.");
	});

    it('should return [0,0] for a string of "X"', function() {
		expect(alf.findSpaceship('X')).toEqual([0,0]);
	});

    it('should return "Spaceship lost forever." for a string of ".', function() {
		expect(alf.findSpaceship('.')).toEqual("Spaceship lost forever.");
	});

});
