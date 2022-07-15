function createGrid(amount) {
    let gridArray = [];
    gridContainer = document.querySelector('#grid-container');
    resetButton = document.querySelector('button');

    // Create divs using for loop
    for (let i = 0; i < amount**2; i++) {
        let gridBox = document.createElement('div');
        gridBox.setAttribute('id', 'grid-box');
        gridArray.push(gridBox);
    };

    // Add mouseover event to each grid box
    gridArray.forEach(box => {
        box.addEventListener('mouseover', function() {
            this.classList.add('grid-box-hover');
        });

        gridContainer.appendChild(box);
    }); 

    // Set grid div dimensions
    let boxDimensions = (amount * 30);

    gridContainer.style.height = boxDimensions.toString() + 'px';
    gridContainer.style.width = boxDimensions.toString() + 'px';
}

// Create initial grid
createGrid(16);

// When button is clicked prompt user for a value
function setGrid() {
    let numberOfBoxes = parseInt(prompt('Enter the desired length of the grid:'));

    // Remove grid before creating new grid
    gridBoxList = document.querySelectorAll('#grid-box');
    gridBoxList.forEach(box => {
        box.remove();
    })

    createGrid(numberOfBoxes);
};