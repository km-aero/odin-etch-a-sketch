// Create a 16x16 grid of square grids

// Create 36 divs using for loop
let gridArray = [];

for (let i = 0; i < 256; i++) {
    let gridBox = document.createElement('div');
    gridBox.setAttribute('id', 'grid-box');
    gridArray.push(gridBox);
};

// Add them to gridbox div