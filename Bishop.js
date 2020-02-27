const Piece = require("./Piece.js");

class Bishop extends Piece {
  constructor(owner, color, xPos, yPos, rank) {
    super(owner, color, xPos, yPos, rank); 
  }
  // Ensures piece moves within the constraints of it's movement rule 
  moveConstraints = (xPos, yPos) => {
    let dist_diag_x = Math.abs(this.x_position - xPos);
    let dist_diag_y = Math.abs(this.y_position - yPos);
    if (dist_diag_x > 1 || dist_diag_y > 1) {
      return this.movementError(xPos, yPos);
    }
  }
  // Verifies that move is not off-board, within constraints, then sets new x and y position
  movePiece = (xPos, yPos) => {
    this.onBoard(xPos, yPos);
    this.moveConstraints(xPos, yPos);
    this.setXposAndYpos(xPos, yPos);
  }
}

const bishop1 = new Bishop("white", "white", 1, 1, "bishop");
bishop1.movePiece(2, 2);
console.log(bishop1);
bishop1.resetPosition();
console.log(bishop1);
