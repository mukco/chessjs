import { Board } from './models/Board.js'
var hello = document.getElementById('hello-world');  
const board1 = new Board('Board One');
console.log(board1);
hello.innerText = "changed";