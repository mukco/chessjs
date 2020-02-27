class Space { 
    constructor(xPos, yPos, board, color) { 
        this.xPos = xPos; 
        this.yPos = yPos; 
        this.board = board; 
        this.color = color; 
        this.piece = null; 
    }

    pieceOnSpace = () => { 
        return this.piece; s
    }

    spaceColor = () => { 
        return this.color; 
    }
}

const space1 = new Space(5, 4, "board1", "white"); 
console.log(space1); 
console.log(space1.pieceOnSpace())