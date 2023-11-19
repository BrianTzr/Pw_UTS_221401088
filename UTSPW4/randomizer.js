function changeColor(gridItem) {
    // Get the color picker div within the clicked grid item
    const colorPicker = gridItem.querySelector('.color-picker');

    // Prompt the user to enter a color code
    const newColor = prompt('Enter a color code (e.g., #00ff00):');

    // Set the background color of the color picker to the user-provided color
    if (newColor) {
        colorPicker.style.backgroundColor = newColor;
    }
}

function randomizeColors() {
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();

    // Change the color in the Connect 4 game
    changePieceColorsInConnect4(randomColor1, randomColor2);

    // Update the colors of the grid items in the Start Menu
    updateGridItemColors(randomColor1, randomColor2);
}

// Function to change the color in the Connect 4 game
function changePieceColorsInConnect4(color1, color2) {
    const redPieces = document.getElementsByClassName('red-piece');
    const yellowPieces = document.getElementsByClassName('yellow-piece');

    // Change the color of red pieces
    for (const redPiece of redPieces) {
        redPiece.style.backgroundColor = color1;
    }

    // Change the color of yellow pieces
    for (const yellowPiece of yellowPieces) {
        yellowPiece.style.backgroundColor = color2;
    }
}

// Function to update the colors of the grid items in the Start Menu
function updateGridItemColors(color1, color2) {
    // Select the grid item in the Start Menu
    const gridItem = document.querySelector('.grid-item');

    // Change the background color of the grid item
    gridItem.style.backgroundColor = color1;

    // Change the color of the button text
    const button = gridItem.querySelector('.btn-custom');
    button.style.color = color2;
}