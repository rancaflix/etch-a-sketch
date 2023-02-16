const container = document.createElement('div');
const body = document.body;
container.style.backgroundColor = 'pink';
body.appendChild(container);

// early mechanics of changing number of rows and columns
let isNumber = Number.isInteger || function(number){ return !isNaN(parseFloat(n)) && isFinite(n) };
let result = prompt("Enter your number");
if (!isNumber(result)){
   prompt("Please try again and enter your number");
}

// board
let board = document.createElement('div');
board.className = 'board';
for (let i = 0; i < result; i++) {
    row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < result; j++) {
        let newBox = document.createElement('div');
        newBox.className = 'newbox';
        newBox.textContent = j;
        row.appendChild(newBox);
    }
    board.appendChild(row);
}

container.appendChild(board);
