// Select the button and the color span
const btn = document.getElementById('btn');
const colorSpan = document.querySelector('.color');

// Hexadecimal characters array
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

// Add event listener on the button
btn.addEventListener('click', () => {
    // Generate random hex color
    const hexColor = generateHexColor();
    
    // Set the background color of the body
    document.body.style.backgroundColor = hexColor;

    // Update the color code in the span
    colorSpan.textContent = hexColor; 
});

// Function to generate a hex color
const generateHexColor = () => {
    let hexColor = '#';  // Start with the hash symbol
    for (let i = 0; i < 6; i++) {
        hexColor += hex[generateRandomNumber()];  // Append a random hex character
    }
    return hexColor;  // Return the complete hex color
}

// Function to generate a random number between 0 and 15 (hexadecimal range)
const generateRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);  // Random number between 0 and 15
}
