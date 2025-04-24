// Function to adjust font size based on screen width
function adjustFontSize() {
    var screenWidth = window.innerWidth;
    var baseFontSize = 16; // Base font size in pixels
    var scaleFactor = screenWidth / 1200; // Adjust scale factor as needed

    // Calculate adjusted font size
    var adjustedFontSize = baseFontSize * scaleFactor;

    // Apply adjusted font size to body element
    document.body.style.fontSize = adjustedFontSize + 'px';
}

// Call adjustFontSize() when the window is resized
window.addEventListener('resize', adjustFontSize);

// Call adjustFontSize() initially to set font size based on initial screen width
adjustFontSize();
