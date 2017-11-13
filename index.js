class Game {
  constructor() {
    this.board = new Board();
  }

  detectWin() {
  }
}

class Board {
  constructor() {
    this.topRow = [false, false, false];
    this.middleRow = [false, false, false];
    this.bottomRow = [false, false, false];
  }
}

var game = new Game();
console.log(game);
