// nav.js
// Dynamically inserts navigation menu into header and footer, with trigram toggle

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    // Header navigation
    if (header) {
        header.innerHTML = `
            <a href="bm-home.html" class="logo">
                <img src="images/BM_Images/BMillettMedia_transparent.png" alt="Site Logo" class="logo">
            </a>
            
            <button id="menu-toggle" aria-label="Toggle Menu">&#9776; Menu</button>

            <nav class="nav">
                <ul>
                    <li><a href="bm-home.html">Home</a></li>
                    <li><a href="bm-about.html">About Me</a></li>
                    <li><a href="bm-resume.html">Resume</a></li>
                    <li><a href="bm-portfolio.html">Portfolio</a></li>
                    <li><a href="mw-home.html">Mentally_Wrong</a></li>
                    <li><a href="DC-home.html">Digital Cactus</a></li>
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
            <nav class="nav">
                <ul>
                    <li><a href="bm-home.html">Home</a></li>
                    <li><a href="bm-about.html">About</a></li>
                    <li><a href="bm-resume.html">Resume</a></li>
                    <li><a href="bm-portfolio.html">Portfolio</a></li>
                    <li><a href="mw-home.html">Mentally_Wrong</a></li>
                    <li><a href="DC-home.html">Digital Cactus</a></li>
                </ul>
                <p>&copy; ${new Date().getFullYear()} BMillett Media. All rights reserved.</p>
            </nav>
        `;
    } else {
        console.warn("No <footer> found for navigation.");
    }
});
