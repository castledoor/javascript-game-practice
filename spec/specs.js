describe("Game", function() {
  it("initializes with a board array", function() {
    var game = Object.create(Game);
    game.initialize();
    game.board.should.eql([]);
  });

  it("initializes with no players", function() {
    var game = Object.create(Game);
    game.initialize();
    game.players.should.eql([]);
  });

  it("creates a player", function() {
    var game = Object.create(Game);
    var player = Object.create(Player);
    game.initialize();
    game.createPlayer();
    game.players.length.should.eql(1);
  });

  it("picks up peice from board",function() {
    var game = Object.create(Game);
    var player = Object.create(Player);
    game.initialize();
    game.createPlayer();
    game.startingPosition();
    game.dropPeice(0);
    game.grabPeice(0);
    game.board.should.eql([undefined]);
  });

  it("drops a peice into a new position", function() {
    var game = Object.create(Game);
    var player = Object.create(Player);
    game.initialize();
    game.createPlayer();
    game.startingPosition();
    game.dropPeice(1);
    game.board.should.eql(["pink"]);
  });

  it("limits peices on board", function() {
    var game = Object.create(Game);
    var player = Object.create(Player);
    game.initialize();
    game.createPlayer();
    game.dropPeice(0);
    game.dropPeice(1); 
    game.board.should.eql(["pink"]);
  });
});

describe("Player", function () {
  it("sets the player color", function() {
    var player = Object.create(Player);
    player.setColor("pink");
    player.color.should.eql("pink");
  });
});



