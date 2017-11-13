var prompt = require('prompt');

class Game {
  constructor() {
    this.board = new Board();
  }

  // input 'top', 'middle', 'bottom' for row and 0, 1, 2 for col
  placePiece(piece, row, col) {
    if (row === 'top') {
      if(!this.board.topRow[col]) {
        this.board.topRow[col] = piece;
      }
    } else if (row === 'middle') {
      if(!this.board.middleRow[col]) {
        this.board.middleRow[col] = piece;
      }
    } else if (row === 'bottom') {
      if(!this.board.bottomRow[col]) {
        this.board.bottomRow[col] = piece;
      }
    }

    this.drawBoard();
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

  drawBoard() {
    let outputTop = '';
    let outputMiddle = '';
    let outputBottom = '';

    for (var i = 0; i < 3; i++) {
      if (!this.board.topRow[i]) {
        outputTop += '[]';
      } else {
        outputTop += this.board.topRow[0];
      }
    }


    for (var i = 0; i < 3; i++) {
      if (!this.board.middleRow[i]) {
        outputMiddle += '[]';
      } else {
        outputMiddle += this.board.middleRow[0];
      }
    }

    for (var i = 0; i < 3; i++) {
      if (!this.board.bottomRow[i]) {
        outputBottom += '[]';
      } else {
        outputBottom += this.board.bottomRow[0];
      }
    }

    console.log(outputTop);
    console.log(outputMiddle);
    console.log(outputBottom);
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
game.drawBoard();
console.log(game.detectWin('x'));
