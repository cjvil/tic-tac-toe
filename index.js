class Game {
  constructor() {
    this.board = new Board();
  }

  detectWin(piece) {
    let topRowWin = true;
    let middleRowWin = true;
    let bottomRowWin = true;


    for (var i = 0; i < 3; i++) {
      // handle column wins
      if (this.board.topRow[i] === piece && this.board.middleRow[i] === piece && this.board.bottomRow[i]) {
        return true;
      }

      if (this.topRow[i] !== piece) {
        topRowWin = false;
      }

      if (this.middleRow[i] !== piece) {
        middleRowWin = false;
      }

      if (this.bottomRow[i] !== piece) {
        bottomRowWin = false;
      }
    }
  }

  if (topRowWin || middleRowWin || bottomRowWin) {
    return true;
  }

  return false;
}

class Board {
  constructor() {
    this.topRow = [null, null, null];
    this.middleRow = [null, null, null];
    this.bottomRow = [null, null, null];
  }
}

var game = new Game();
console.log(game);
