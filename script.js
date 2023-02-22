const body = document.body;
const container = document.getElementById("container");
container.style.backgroundColor = 'pink';
let sideNumber = 16;

// create board
let board = document.createElement('div');
board.className = 'board';
let factor = 800 / sideNumber ;

// loop creating divs on board
for (let i = 0; i < sideNumber; i++) {
    row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < sideNumber; j++) {
        let newBox = document.createElement('div');
        newBox.className = 'newBox';
        row.appendChild(newBox);
        newBox.style.cssText = `min-width: ${factor}px; min-height: ${factor}px`;
    }
    board.appendChild(row);
}
container.appendChild(board);

// clear button function
let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(){
    let newBoxes = document.querySelectorAll(".newBox");
    newBoxes.forEach(element => {
        element.style.backgroundColor = "pink";
    })
});

// Range slider
const slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = `${slider.value}x${slider.value}`; // Display the default slider value

// Board and slider
slider.oninput = function() {
  output.innerHTML = `${this.value}x${this.value}`;
  sideNumber = this.value;
  console.log(sideNumber);
}

// hover element
let newBox = document.getElementsByClassName("newBox");
let newBoxArray = Array.prototype.slice.call(newBox);

function boxListener(){
    board.addEventListener("mouseover", function(event){
      if (event.target.className === "newBox") {
        event.target.style.backgroundColor = "black";
      }
    });
  };
  
boxListener();

// apply button
let applyButton = document.getElementById("apply");
applyButton.addEventListener("click", function(){
    factor = 800 / sideNumber;
    board.innerHTML = ' ';
    for (let i = 0; i < sideNumber; i++) {
        row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < sideNumber; j++) {
            let newBox = document.createElement('div');
            newBox.className = 'newBox';
            row.appendChild(newBox);
            newBox.style.cssText = `min-width: ${factor}px; min-height: ${factor}px`;
        }
        board.appendChild(row);
    }    
});


