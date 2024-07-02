document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const gridSizeBtn = document.getElementById('gridSize');
    let isMouseDown = false;
    let gridSize = 0; // Initialize gridSize variable

    // const gridSize = 16; Initial setting for gridSize

    gridSizeBtn.addEventListener('click', () =>{
        gridSize = getGridSize(); // Assign gridSize from the function
        createGrid(gridSize);
    });

    // Add event listener for hover effect
    container.addEventListener('mousedown', (event) =>{
        if (event.target.classList.contains('square')) {
            isMouseDown = true;
            event.target.style.backgroundColor = getRandomColor(); // Change color to blue
        }
    });

    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    //Mouseover event to draw when mouse is down
    container.addEventListener('mouseover', (event) => {
        if (isMouseDown && event.target.classList.contains('square')){
            event.target.style.backgroundColor = getRandomColor();
        }
    })
})


function getGridSize(){
    let gridSize = prompt("Set Grid Size: ");

    gridSize = parseInt(gridSize);

    while (isNaN(gridSize) || gridSize < 0 || gridSize > 100){
        gridSize = prompt("Please enter a number between 1 and 100");
        gridSize = parseInt(gridSize); // Convert again inside the loop
    }

    console.log(`Grid Size is ${gridSize}`);
    
    return gridSize;
}

function createGrid(size){
    // Clear existing squares
    container.innerHTML = '';

    // Get container width dynamically
    const containerWidth = container.clientWidth;
    console.log(`Container width : ${containerWidth}`);
    // Calculate the square size based on container size and gridSize
    const squareSize = containerWidth / size;
    console.log(`Square width : ${squareSize}`);
    // Create new grid
    for (let i = 0; i < size * size; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        // inline styling in order to calculate dimensions dynamically
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.boxSizing = `border-box`;
        square.style.border = `1px solid #ddd`;
        square.style.transition = `background-color 0.3s`;

        container.appendChild(square);
    }
}

function getRandomColor(){
    // Generate random RGB color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Return the CSS color string
    return `rgb(${r},${g},${b})`;
}