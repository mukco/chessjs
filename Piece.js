class Piece {
	//Main properties for Piece type
  constructor(color, owner, xPos, yPos, rank) {
		this.captured = false; 
		this.x_position = xPos; 
		this.y_position = yPos; 
		this.color = color; 
		this.owner = owner; 
		this.rank = rank;
	}
	// Return rank name for piece 
  rankName = () => {
		return this.rank;
  }
	// Returns if the piece is captured 
  pieceCaptured = () => {
    return this.captured ? true : false;
	}
	// Returns the current position of the piece 
	piecePosition = () => { 
		return this.x_position & this.y_position; 
	}
	// Returns the current x position of the piece 
	pieceXpos = () => { 
		return this.x_position; 
	}
	// Returns the current y postion of the piece 
	pieceYpos = () => { 
		return this.y_position; 
	}
	// Set the current x position of the piece
	setXpos = (xPos) => { 
		this.x_position = xPos; 
	}
	// Set the current y position of the piece 
	setYpos = (yPos) => { 
		this.y_position = yPos; 
	}
	// Set the x-position and y-position
	setXposAndYpos = (xPos, yPos) => { 
		this.x_position = xPos; 
		this.y_position = yPos; 
	}
	// Validates that position is not outside of the board 
	onBoard = (xPos, yPos) => { 
		if ((xPos > 8 || xPos < 1) || (yPos > 8 || yPos < 1)) { 
			 this.movementError(xPos, yPos); 
		}
	}
	// Error generator if the move is off-board
	movementError = (xPos, yPos) => { 
		throw new Error(`${this.piece} can't move to (${xPos}, ${yPos})`); 
	}
	// Helper method to reset the position of A piece if need be
	resetPosition = () => { 
		this.x_position = null; 
		this.y_position = null; 
	}
}

const piece = new Piece("bishop", "black");
piece.rankName();
module.exports = Piece;
