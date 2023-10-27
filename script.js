const header = document.querySelector('.homeName');

// Update font size based on scroll position
function updateScale() {
    const scrollY = window.scrollY;
    const newScale = 1 + (scrollY * 0.001);
    header.style.transform = `scale(${newScale})`;
}

window.addEventListener('scroll', updateScale);
