class Player { 
    constructor(name, color) { 
        this.name = name; 
        this.color = color; 
        this.pieces = []; 
    }
    // Gives a piece to a specific player. 
    givePlayerPiece = (piece) => { 
        this.pieces.push(piece); 
    }
}
module.exports = Player; 