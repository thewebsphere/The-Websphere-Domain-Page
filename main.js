// Hightlighting the Active Page Link
function highLight() {
    const links = document.querySelectorAll('.navlink');
    const currentPage = window.location.hash.substring(1) || 'home';

    links.forEach(link => {
        if(link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Event Listener for hash change to update the active page
window.addEventListener('hashchange', highLight);

// Initial call to highlight the current page onload
highLight();