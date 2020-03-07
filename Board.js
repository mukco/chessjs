const Space = require('./Space.js'); 

class Board { 
    constructor(name) { 
        this.name = name; 
        this.spaces = []
    }

    generateSpaces = () => { 
        for(let x = 1; x <= 8; x++) { 
            for(let y = 1; y <= 8; y++) { 
                let space = new Space(x, y, this.name, this.determineSpaceColor(x, y));
                this.spaces.push(space);
            }
        }
    }

    // generateBishops = () => { 
    //     const bishopRightWe
    // }

    determineSpaceColor = (x, y) => { 
        let color; 
        if (x % 2 == 0) { 
            y % 2 == 0 ? color = "black" : color = "white";  
        } else {
            y % 2 == 0 ? color = "white" : color = "black"; 
        }
        return color;
    }
}

const board = new Board('New Board'); 
board.generateSpaces(); 
console.log(board.spaces.filter(spaces => spaces.xPos > 5)); 