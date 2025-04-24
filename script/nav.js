// nav.js
// Dynamically inserts navigation menu
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    if (header) {
        header.innerHTML = `
            <img src="images/MW_mainLogo.png" alt="Mentally_Wrong Logo">
            <nav class="MW_nav">
                <ul>
                    <li><a href="mw-home.html">Home</a></li>
                    <li><a href="mw-about.html">Watch Live</a></li>
                    <!--<li><a href="mw-process.html">Resume</a></li>-->
                    <li><a href="mw-video.html">Resume</a></li>
                    <li><a href="bm-home.html">BMillett Media</a></li>
                </ul>
            </nav>
        `;
    } else {
        console.warn("No <header> found for navigation.");
    }
});
