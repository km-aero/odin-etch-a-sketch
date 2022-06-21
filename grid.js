// Create a 16x16 grid of square grids

// Create 36 divs using for loop
let gridArray = [];

for (let i = 0; i < 256; i++) {
    let gridBox = document.createElement('div');
    gridBox.setAttribute('id', 'grid-box');
    gridArray.push(gridBox);
};

// Add boxes to container div
gridContainer = document.querySelector('#grid-container');

gridArray.forEach(box => {
    box.addEventListener('mouseover', function() {
        // Change style when mouse over
        this.classList.add('grid-box-hover');
    })
    box.addEventListener('mouseout', function() {
        // Change style when mouse out
        this.classList.remove('grid-box-hover');
    })
    gridContainer.appendChild(box);
});