const header = document.querySelector('.homeName');
const home = document.querySelector('.homeText');
const homeContainer = document.querySelector('#Home');
const Sbutton = document.getElementById('skills-link');
const Ebutton = document.getElementById('experience-link');
const skillsList = document.getElementById('skills-list');
const experienceList = document.getElementById('experience-list');
let prevScrollY = window.scrollY;

// Update font size based on scroll position
function updateScale() {
    const scrollY = window.scrollY;
    const newScale = 0.9 + (scrollY * 0.001);
    header.style.transform = `scale(${newScale})`;
}

//  Move the homeText down
function scrollDown() {
    const scrollY = window.scrollY;
    const deltaY = scrollY - prevScrollY;
    const transformValue = `translateY(${deltaY * 2}px)`;
    home.style.transform = transformValue;
    prevScrollY = scrollY;
}

// Reduce the opacity on scrolling up
function opacityReduction() {
    const scrollY = window.scrollY;
    if (scrollY < prevScrollY) {
        const newOpacity = 1 - scrollY * 0.05;
        homeContainer.style.opacity = newOpacity;
    }
    prevScrollY = scrollY;
}

window.addEventListener('scroll', () => {
    updateScale();
    scrollDown();
    opacityReduction();
});


// Toggles the list-group with animation
function toggleList() {
    skillsList.classList.toggle('show-list');
}

function toggleEList() {
    experienceList.classList.toggle('show-list');
}

Sbutton.addEventListener('click', toggleList);
Ebutton.addEventListener('click', toggleEList);