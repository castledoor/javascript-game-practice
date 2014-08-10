var Game = {
  initialize: function() {
    this.board = []
    this.players = []
  },
  createPlayer: function() {
    player = Object.create(Player);
    this.players.push(player);
    this.players[0].setColor("pink");
  },
  startingPosition: function(index) {
    if (this.board[index] === this.board[0]) {
      this.board[0] = this.players[0].color;
      return this.board[0];
    }
  },
  grabPeice: function(index) {
    if (this.board[index] == this.players[0].color) {
      this.board[index] = undefined;
    }
  },
  dropPeice: function(index) {
     var peice = this.board.indexOf("pink")
    if (this.board[index] == undefined && peice == -1){
      this.board[index] = this.players[0].color;
      return this.board[index];
    }
  },
}
var Player = {
  setColor: function(color) {
    this.color = color;
  }
}



$(document).ready(function() {
  var game = Object.create(Game);
  var initializeGame = function() {
    // $(".spaces").empty();
    game.initialize();
    game.createPlayer();
   
  };

  var playGame = function() {
    initializeGame();
    $(".spaces").click(function() {
      if ($(this).text() == "pink") {
        $(".spaces").empty(this.id);
        $(this).text(game.grabPeice(this.id));
      } else if ($(this).text() != "pink") {
        $(this).text(game.dropPeice(this.id));
        console.log(game.board);
    }
  });
 };
  playGame();
});


