var Game = {
  initialize: function() {
    this.board = [];
    this.players = [];
  },
  setup: function(index) {
    for (var i = 0; i < 3; i++) {
      if ( i % 2 == 0)  {
        this.board.push(this.players[0].color);
      }
      else if ( i % 1 == 0){
        this.board.push(undefined);
      }
    }
  },
  place_setup: function(index) {
    if (this.board[index] !== undefined){
      this.board[index] = this.players[0].color;
      return this.board[index];
    }
  },
  grabPeice: function(index) {
    if (this.board[index] == this.players[0].color) {
      this.board[index] = undefined;
    }
  },
  dropPeice: function(index) {
    if (this.board[index] == undefined){
      this.board[index] = this.players[0].color;
      return this.board[index];
    }
  },
  currentPosition: function(index) {
     return this.board.indexOf(index)
  },
  createPlayer: function() {
    player = Object.create(Player);
    this.players.push(player);
    this.players[0].setColor("pink");
  }
}
var Player = {
  setColor: function(color) {
    this.color = color;
  }
}

$(document).ready(function() {
  var game = Object.create(Game);
  var initializeGame = function() {
    game.initialize();
    game.createPlayer();
    game.setup();
    $(".spaces").append(function() {
      $(this).text(game.place_setup(this.id));
    });
  };

  var playGame = function() {
    initializeGame();
    console.log(game.board);
     $(".spaces").click(function() {
      var current = this.id
      if ($(this).text() == "pink") {
        $(this).empty(this.id);
        console.log(current);
        console.log(game.board);
        $(this).text(game.grabPeice(this.id));
      } else if ($(this).text() != "pink") {
        console.log(this.id);
        $(this).text(game.dropPeice(this.id));
        console.log(game.board);
      }
    });
  };
  playGame();
});
