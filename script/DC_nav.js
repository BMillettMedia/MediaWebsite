// nav.js
// Dynamically inserts navigation menu
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    if (header) {
        header.innerHTML = `
            <img src="images/MW_mainLogo.png" alt="Mentally_Wrong Logo">
            <nav class="MW_nav">
                <ul>
                    <li><a href="DC-home.html">Home</a></li>
                    <li><a href="DC-about.html">About Me</a></li>
                    <li><a href="DC-portfolio.html">Portfolio</a></li>
                    <li><a href="DC-offers.html">Portfolio</a></li>
                    <li><a href="mw-home.html">Mentally_Wrong</a></li>
                    <li><a href="bm-home.html">Mentally_Wrong</a></li>
                </ul>
            </nav>
        `;
    } else {
        console.warn("No <header> found for navigation.");
    }
});
