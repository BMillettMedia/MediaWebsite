// nav.js
// Dynamically inserts navigation menu
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    if (header) {
        header.innerHTML = `
            <img src="images/BM_Images/BMillettMedia_transparent.png" alt="Site Logo">
            <nav class="BM_nav">
                <ul>
                    <li><a href="bm-home.html">Home</a></li>
                    <li><a href="bm-about.html">About Me</a></li>
                    <li><a href="bm-resume.html">Resume</a></li>
                    <li><a href="bm-portfolio.html">Portfolio</a></li>
                    <li><a href="mw-home.html">Mentally_Wrong</a></li>
                    <li><a href="DC_home.html">Home</a></li>
                </ul>
            </nav>
        `;
    } else {
        console.warn("No <header> found for navigation.");
    }
});
