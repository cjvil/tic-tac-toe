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

      if (this.board.topRow[i] !== piece) {
        topRowWin = false;
      }

      if (this.board.middleRow[i] !== piece) {
        middleRowWin = false;
      }

      if (this.board.bottomRow[i] !== piece) {
        bottomRowWin = false;
      }
    }

    if (topRowWin || middleRowWin || bottomRowWin) {
      return true;
    }

    if (this.board.topRow[0] === piece && this.board.middleRow[1] === piece && this.board.bottomRow[2] === piece) {
      return true;
    }

    if (this.board.topRow[2] === piece && this.board.middleRow[1] === piece && this.board.bottomRow[0] === piece) {
      return true;
    }

    return false;
  }
};

class Board {
  constructor() {
    this.topRow = [null, null, null];
    this.middleRow = [null, null, null];
    this.bottomRow = [null, null, null];
  }
}

var game = new Game();
console.log(game);
