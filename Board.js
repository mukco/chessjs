const Space = require("./Space.js");
const Bishop = require("./Bishop.js");
class Board {
  constructor(name) {
    this.name = name;
    this.spaces = [];
    this.pieces = [];
  }
// Generats board
  generateBoard = () => {
    this.generateSpaces();
    this.generateBishops();
  };
  // Generates squares for the board.
  generateSpaces = () => {
    for (let xPos = 1; xPos <= 8; xPos++) {
      for (let yPos = 1; yPos <= 8; yPos++) {
        let space = new Space(
          xPos,
          yPos,
          this.name,
          this.determineSpaceColor(xPos, yPos)
        );
        this.spaces.push(space);
      }
    }
  };
  // Generates 4 bishops at appropriate starting positions.
  generateBishops = () => {
    const bishopLeftWhite = new Bishop("white", 1, 3);
    this.placePieceOnSpace(bishopLeftWhite, 1, 3);
    const bishopRightWhite = new Bishop("white", 1, 6);
    this.placePieceOnSpace(bishopRightWhite, 1, 6);
    const bishopLeftBlack = new Bishop("black", 8, 3);
    this.placePieceOnSpace(bishopLeftBlack, 8, 3);
    const bishopRightBlack = new Bishop("black", 8, 6);
    this.placePieceOnSpace(bishopRightBlack, 8, 6);

    this.pieces.push(
      bishopLeftWhite,
      bishopRightWhite,
      bishopLeftBlack,
      bishopRightBlack
    );
  };

  determineSpaceColor = (xPos, yPos) => {
    let color;
    if (xPos % 2 == 0) {
      yPos % 2 == 0 ? (color = "black") : (color = "white"); // If x is even
    } else {
      yPos % 2 == 0 ? (color = "white") : (color = "black"); // If x is odd
    }
    return color;
  };
  // placePieceOnSpace places a piece on any specified space.
  // Set piece will set a piece to a space. 
  // It cannot identify a space. It can only set a piece after space is identified. 
  placePieceOnSpace = (piece, xPos, yPos) => {
    const placedSpace = this.spaces.find(space =>
      Board.findSpace(space, xPos, yPos)
    );
    placedSpace.setPiece(piece);
  };
  // Helper method for placePieceOnSpace. 
  // Identifies a specific space.
  static findSpace = (space, xPos, yPos) => {
    return space.xPos == xPos && space.yPos == yPos ? true : false;
  };
}

const board = new Board("New Board");
board.generateBoard();
console.log(board);
// console.log(board.spaces);
// console.log(board.pieces);
