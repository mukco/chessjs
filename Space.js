const Bishop = require("./Bishop.js");

class Space {
  constructor(xPos, yPos, board, color) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.board = board;
    this.color = color;
    this.piece = null;
  }
  // Returns the piece on space
  pieceOnSpace = () => {
    return this.piece;
  };
  // Returns space color
  spaceColor = () => {
    return this.color;
  };
  // Sets a piece to a space 
  setPiece = piece => {
    this.piece = piece;
  };
}

module.exports = Space;
