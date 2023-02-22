const body = document.body;
const container = document.getElementById("container");
container.style.backgroundColor = 'pink';

// clear button function
let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(){
    newBoxArray.forEach(element => {
        element.style.backgroundColor = "pink";
    })
});

// Range slider
const slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = `${slider.value}x${slider.value}`; // Display the default slider value

// Board and slider
let result = 16;
slider.oninput = function() {
  output.innerHTML = `${this.value}x${this.value}`;
  result = this.value;
}
// create board
let board = document.createElement('div');
board.className = 'board';
let factor = 800 / result ;

// loop creating divs on board
for (let i = 0; i < result; i++) {
    row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < result; j++) {
        let newBox = document.createElement('div');
        newBox.className = 'newBox';
        row.appendChild(newBox);
        newBox.style.cssText = `min-width: ${factor}px; min-height: ${factor}px`;
    }
    board.appendChild(row);
}
container.appendChild(board);

// apply button
let applyButton = document.getElementById("apply");
applyButton.addEventListener("click", function(e){console.log("apply")});

// hover element
let newBox = document.getElementsByClassName("newBox");
let newBoxArray = Array.prototype.slice.call(newBox);

newBoxArray.forEach(element => {
    element.addEventListener("mouseenter", function(){
        this.style.backgroundColor = "black";
    });
});
