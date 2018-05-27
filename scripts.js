//changing the size of the squares
const submitButton = document.getElementById('#submit');
const selectOptions = document.querySelectorAll('option');
let squares = document.querySelectorAll('#square');
let clicks = 0;

submitButton.addEventListener('click', createGrid);
container.addEventListener('click', function () {
    clicks++;
    colorSquares();
});

const width = 600;
const height = 600;
let gridSize = 16;

drawSquares();

function createGrid () { 
    selectOptions.forEach(opt => {
        if(opt.selected) {
            gridSize = opt.value;
            opt.selected = opt.value;
        }
    });

    const container = document.querySelector('#container');
    //deleting the old squares upon size change
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild); 
    }
    //drawing squares again
    drawSquares();
}

//drawing the squares in the #container
function drawSquares() {
    for(let i = 0; i < gridSize * gridSize; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('square');
        newDiv.setAttribute("id","square");
        newDiv.setAttribute("style","height: " + height/gridSize + "px;" +
            "width: " + width/gridSize + "px");
        container.appendChild(newDiv);
    }
    squares = document.querySelectorAll('#square');
}


//clearing colors
const clearButton = document.getElementById("#clear");
clearButton.addEventListener('click', function () {
    squares.forEach(square => square.classList.remove('squarehover'));
});


//decides which function should be invoked
function colorSquares() {
    if(clicks%2)
        enableColoringSquares();
    else
        disableColoringSquares();
}
//function which enables the squares to be colored on hover
function enableColoringSquares() {
    squares.forEach(square => { square.addEventListener('mousemove', function () {
        square.classList.add('squarehover');
        });
    });
}

//disables coloring squares on hover
function disableColoringSquares() {
    squares.forEach(square => { square.addEventListener('mousemove', function () {
        square.classList.remove('squarehover');
        });
    });
}
