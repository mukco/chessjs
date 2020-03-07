const Space = require("./Space.js");
const Bishop = require("./Bishop.js");
const Player = require("./Player.js"); 

class Board {
  constructor(name) {
    this.name = name;
    this.spaces = [];
    this.pieces = [];
    this.whitePlayer = null; 
    this.blackPlayer = null;
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
    let board = this; 
    let bishopLeftWhite = new Bishop(this.whitePlayer, 1, 3, board);
    this.placePieceOnSpace(this.whitePlayer, 1, 3);
    this.whitePlayer.givePlayerPiece(bishopLeftWhite); 
    let bishopRightWhite = new Bishop(this.whitePlayer, 1, 6, board);
    this.placePieceOnSpace(bishopRightWhite, 1, 6);
    this.whitePlayer.givePlayerPiece(bishopRightWhite);
    let bishopLeftBlack = new Bishop(this.blackPlayer, 8, 3, board);
    this.placePieceOnSpace(bishopLeftBlack, 8, 3);
    this.blackPlayer.givePlayerPiece(bishopLeftBlack);
    let bishopRightBlack = new Bishop(this.blackPlayer, 8, 6, board);
    this.placePieceOnSpace(bishopRightBlack, 8, 6);
    this.blackPlayer.givePlayerPiece(bishopRightBlack);

    this.pieces.push(
      bishopLeftWhite,
      bishopRightWhite,
      bishopLeftBlack,
      bishopRightBlack
    );
  };
  // Determines color of space 
  determineSpaceColor = (xPos, yPos) => {
    let color;
    if (xPos % 2 == 0) {
      yPos % 2 == 0 ? (color = "black") : (color = "white"); // If x is even
    } else {
      yPos % 2 == 0 ? (color = "white") : (color = "black"); // If x is odd
    }
    return color;
  };
  // placePieceOnSpace() places a piece on any specified space.
  // setPiece() will set a piece to a space. 
  // It cannot identify a space. It can only set a piece after space is identified. 
  placePieceOnSpace = (piece, xPos, yPos) => {
    const placedSpace = this.spaces.find(space =>
      Board.findSpace(space, xPos, yPos)
    );
    placedSpace.setPiece(piece);
  };
  // setPlayer() to a space. 
  setPlayer = (player) => { 
      player.color == 'white' ? this.whitePlayer = player : this.blackPlayer = player; 
  }
  // Helper method for placePieceOnSpace. 
  // Identifies a specific space.
  static findSpace = (space, xPos, yPos) => {
    return space.xPos == xPos && space.yPos == yPos ? true : false;
  };
}

const board1 = new Board('Board 1')
const whtPlayer = new Player('Devoun', 'white');
const blkPlayer = new Player('Julie', 'black'); 
board1.setPlayer(whtPlayer); 
board1.setPlayer(blkPlayer);
console.log(board1);
board1.generateBoard(); 
console.log(board1.pieces); 

module.exports = Board;