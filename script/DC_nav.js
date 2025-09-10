// nav.js
// Dynamically inserts navigation menu into header and footer, with trigram toggle

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    // Header navigation
    if (header) {
        header.innerHTML = `
            <a href="bm-home.html">
                <img src="images/DC-Logo-Temp.png" alt="Digital Cactus Logo" class="logo"></img>
            </a>
            
            <button id="menu-toggle" aria-label="Toggle Menu">&#9776; Menu</button>

            <nav class="DC_nav">
                <ul>
                    <li><a href="DC_home.html">Home</a></li>
                    <li><a href="DC-about.html">About Me</a></li>
                    <li><a href="DC-portfolio.html">Portfolio</a></li>
                    <li><a href="DC-offers.html">Offers</a></li>
                    <li><a href="mw-home.html">Mentally_Wrong</a></li>
                    <li><a href="bm-home.html">BMillett Media</a></li>
                </ul>
            </nav>
        `;

        // ✅ Add trigram toggle functionality
        const toggleButton = header.querySelector("#menu-toggle");
        const nav = header.querySelector(".nav");

        if (toggleButton && nav) {
            toggleButton.addEventListener("click", () => {
                nav.classList.toggle("show");
            });
        }
    } else {
        console.warn("No <header> found for navigation.");
    }

    // Footer navigation
    if (footer) {
        footer.innerHTML = `
            <nav class="DC_nav">
                <ul>
                    <li><a href="DC_home.html">Home</a></li>
                    <li><a href="DC-about.html">About Me</a></li>
                    <li><a href="DC-portfolio.html">Portfolio</a></li>
                    <li><a href="DC-offers.html">Offers</a></li>
                    <li><a href="mw-home.html">Mentally_Wrong</a></li>
                    <li><a href="bm-home.html">BMillett Media</a></li>
                </ul>
                <p>&copy; ${new Date().getFullYear()} BMillett Media. All rights reserved.</p>
            </nav>
        `;
    } else {
        console.warn("No <footer> found for navigation.");
    }
});
