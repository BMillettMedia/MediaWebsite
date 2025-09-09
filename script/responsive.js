// =========================
// Font Size Adjustment
// =========================
function adjustFontSize() {
  var screenWidth = window.innerWidth;
  var baseFontSize = 16;
  var scaleFactor = screenWidth / 1200;
  var adjustedFontSize = baseFontSize * scaleFactor;
  document.body.style.fontSize = adjustedFontSize + "px";
}

window.addEventListener("resize", adjustFontSize);
adjustFontSize();

// =========================
// Mobile Menu Toggle
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("menu-toggle");
  const nav = document.querySelector(".nav");

  if (toggleButton && nav) {
    toggleButton.addEventListener("click", () => {
      nav.classList.toggle("show"); // Toggle visibility
    });
  }
});
