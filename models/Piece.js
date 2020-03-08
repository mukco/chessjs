const Board = require("./Board.js");
class Piece {
  //Main properties for Piece type
  constructor(player, xPos, yPos, board) {
    this.captured = false;
    this.xPos = xPos;
    this.yPos = yPos;
    this.board = board;
    this.color = player.color;
    this.player = player;
  }
  // Returns if the piece is captured
  pieceCaptured = () => {
    return this.captured ? true : false;
  };
  // Returns the current position of the piece
  piecePosition = () => {
    return this.xPos & this.yPos;
  };
  // Returns the current x position of the piece
  pieceXpos = () => {
    return this.xPos;
  };
  // Returns the current y postion of the piece
  pieceYpos = () => {
    return this.yPos;
  };
  // Set the current x position of the piece
  setXpos = xPos => {
    this.xPos = xPos;
  };
  // Set the current y position of the piece
  setYpos = yPos => {
    this.yPos = yPos;
  };
  // Set the x-position and y-position
  setXposAndYpos = (xPos, yPos) => {
    this.xPos = xPos;
    this.yPos = yPos;
  };
  // Validates that position is not outside of the board
  onBoard = (xPos, yPos) => {
    if (xPos > 8 || xPos < 1 || yPos > 8 || yPos < 1) {
      this.movementError(xPos, yPos);
    }
  };
  // Error generator if the move is invalid
  movementError = (xPos, yPos) => {
    throw new Error(`${this.piece} can't move to (${xPos}, ${yPos})`);
  };
  // Helper method to reset the position of A piece if need be
  resetPosition = () => {
    this.xPos = null;
    this.yPos = null;
  };
  // Returns the piece type
  returnPieceType = () => {
    let type = this.__proto__;
    return type;
  };
  // Method that checks if there is an obstruction horizontally.
  horizontalQuery = (newXpos, newYpos) => {
    let distance = Math.abs(this.xPos - newXpos);
    let xPos = this.xPos;
    for (let i = 0; i <= distance; i++) {
      this.board.spaces.find(space => Board.findSpace(space, xPos, this.yPos));
      newXpos > this.xPos ? xPos++ : xPos--;
    }
    return false;
  };
}
module.exports = Piece;