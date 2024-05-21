describe('Alf', function() {
	beforeEach(function() {
		alf = new Alf();
	});
    it('should return "Spaceship lost forever." for an empty string', function() {
		expect(alf.findSpaceship('')).toEqual("Spaceship lost forever.");
	});

});
