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

    it('should return "Spaceship lost forever." for a string of "."', function() {
		expect(alf.findSpaceship('.')).toEqual("Spaceship lost forever.");
	});

    it('should return [8,0] for a string of "........X."', function() {
		expect(alf.findSpaceship('........X.')).toEqual([8,0]);
	});

    it('should return "Spaceship lost forever." for a string of ".........."', function() {
		expect(alf.findSpaceship('..........')).toEqual("Spaceship lost forever.");
	});

    it('should return [3,1] for a string of "...X......\n.........."', function() {
		expect(alf.findSpaceship("...X......\n..........")).toEqual([3,1]);
	});

    it('should return [3,0] for a string of "..........\n...X......"', function() {
		expect(alf.findSpaceship("..........\n...X......")).toEqual([3,0]);
	});

    it('should return [7, 2] for a string of "..........\n..........\n..........\n.......X..\n..........\n.........."', function() {
		expect(alf.findSpaceship("..........\n..........\n..........\n.......X..\n..........\n..........")).toEqual([7,2]);
	});

});
