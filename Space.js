const Bishop = require('./Bishop.js'); 

class Space { 
    constructor(xPos, yPos, board, color) { 
        this.xPos = xPos; 
        this.yPos = yPos; 
        this.board = board; 
        this.color = color; 
        this.piece = null; 
    }

    pieceOnSpace = () => {
        return this.piece; 
    }

    spaceColor = () => { 
        return this.color; 
    }

    setPiece = (piece) => {
        this.piece = piece;  
    }
}

module.exports = Space;

const space1 = new Space(5, 4, "board1", "white"); 
const bishop = new Bishop("white", "white", 1, 1, "bishop");

// console.log(space1); 
// console.log(space1.setPiece(bishop));
// console.log(space1.piece)