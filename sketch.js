document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const gridSize = 16;
    let isMouseDown = false;

    for (let i = 0; i < gridSize * gridSize; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    // Add event listener for hover effect
    container.addEventListener('mousedown', (event) =>{
        if (event.target.classList.contains('square')) {
            isMouseDown = true;
            event.target.style.backgroundColor = 'blue'; // Change color to blue
        }
    });

    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    //Mouseover event to draw when mouse is down
    container.addEventListener('mouseover', (event) => {
        if (isMouseDown && event.target.classList.contains('square')){
            event.target.style.backgroundColor = 'blue';
        }
    })
})


// function getGridSize(){
//     prompt("")
// }