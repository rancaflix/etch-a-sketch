const body = document.body;
const container = document.getElementById("container");
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
        newBox.style.backgroundColor = "white";
        row.appendChild(newBox);
        newBox.style.cssText = `min-width: ${factor}px; min-height: ${factor}px; background-color: white`;
    }
    board.appendChild(row);
}
container.appendChild(board);

// clear button function
let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(){
    let newBoxes = document.querySelectorAll(".newBox");
    newBoxes.forEach(element => {
        element.style.backgroundColor = "white";
    })
});

// Range slider
const slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = `${slider.value}x${slider.value}`; // Display the slider value
output.style.cssText = "color: white; font-weight: 900; text-align: center";

// Board and slider
slider.oninput = function() {
  output.innerHTML = `${this.value}x${this.value}`;
  sideNumber = this.value;
}

// painter functions
function blackBoxPainter(){
    board.addEventListener("mouseover", function(event){
      if (event.target.className === "newBox") {
        event.target.style.backgroundColor = "black";
      }
    });
  };

function rainbowBoxPainter(){
    board.addEventListener("mouseover", function(event){
        if (event.target.className === "newBox") {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let randomColor = `rgb(${r},${g},${b})`;
            event.target.style.backgroundColor = randomColor;
        };
      });
    }; 
  
blackBoxPainter();

// buttons for painter functions
let classicButton = document.getElementById("classic");
let rainbowButton = document.getElementById("rainbow");
classicButton.addEventListener("click", function(){
    board.removeEventListener("mouseover", function(event){
        if (event.target.className === "newBox") {
          event.target.style.backgroundColor = randomColor;
        };
      });
    blackBoxPainter();
});
rainbowButton.addEventListener("click", function(){
    board.removeEventListener("mouseover", function(event){
        if (event.target.className === "newBox") {
          event.target.style.backgroundColor = "black";
        }
      });
    rainbowBoxPainter();
})

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
            newBox.style.cssText = `min-width: ${factor}px; min-height: ${factor}px; background-color: white`;
        }
        board.appendChild(row);
    }    
});


