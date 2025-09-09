// =========================
// Font Size Adjustment
// =========================
function adjustFontSize() {
  var screenWidth = window.innerWidth;
  var baseFontSize = 16; // Base font size in pixels
  var scaleFactor = screenWidth / 1200; // Adjust scale factor as needed

  // Calculate adjusted font size
  var adjustedFontSize = baseFontSize * scaleFactor;

  // Apply adjusted font size to body element
  document.body.style.fontSize = adjustedFontSize + "px";
}

// Call adjustFontSize() on resize + initial load
window.addEventListener("resize", adjustFontSize);
adjustFontSize();

// =========================
// Mobile Menu Toggle
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});
