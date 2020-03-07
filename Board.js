const Space = require('./Space.js'); 
const Bishop = require('./Bishop.js');
class Board { 
    constructor(name) { 
        this.name = name; 
        this.spaces = []; 
        this.pieces = []; 
    }

    generateBoard = () => { 
        this.generateSpaces(); 
        this.generateBishops(); 
    }

    generateSpaces = () => { 
        for(let x = 1; x <= 8; x++) { 
            for(let y = 1; y <= 8; y++) { 
                let space = new Space(x, y, this.name, this.determineSpaceColor(x, y));
                this.spaces.push(space);
            }
        }
    }

    generateBishops = () => { 
        const bishopLeftWhite = new Bishop('white', 1, 3);
        this.spaces.find(this.spaces.findSpace(1, 3));
        const bishopRightWhite = new Bishop('white', 1, 6);
        const bishopLeftBlack = new Bishop('black', 8, 3); 
        const bishopRightBlack = new Bishop('black', 8, 6); 

        this.pieces.push(
            bishopLeftWhite, 
            bishopRightWhite, 
            bishopLeftBlack, 
            bishopRightBlack, 
            ); 
    }

    determineSpaceColor = (x, y) => { 
        let color; 
        if (x % 2 == 0) { 
            y % 2 == 0 ? color = "black" : color = "white";  
        } else {
            y % 2 == 0 ? color = "white" : color = "black"; 
        }
        return color;
    }

    findSpace = (x, y) => { 
        return this.x_position == x && this.y_position == y;
    }
}

const board = new Board('New Board'); 
board.generateBoard(); 
console.log(board.spaces);
console.log(board.pieces);  