// Hightlighting the Active Page Link
function highLight() {
    const links = document.querySelectorAll('.navlink');
    const currentPage = window.location.hash || '#home';

    links.forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


// Smooth Scroll on Click
function smoothScroll() {
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}


// Initialize functions
function initializeNavigation() {
    hightlightActiveLink(); // Call active link highlighting on page load

    // Update highlighting on hash change 
    window.addEventListener("hashchange", hightlightActiveLink);

    enableSmoothScrolling(); // Enable Smooth Scrolling
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeNavigation);