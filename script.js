const header = document.querySelector('.homeName');
const home = document.querySelector('.homeText');
const homeContainer = document.querySelector('#Home');const skillsButton = document.getElementById('skills-link');
const skillsList = document.getElementById('skills-list');
const experienceButton = document.getElementById('experience-link');
const experienceList = document.getElementById('experience-list');
const projectsButton = document.getElementById('projects-link');
const projectsList = document.getElementById('projects-list');
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

// Function to toggle the list-group with animation
function toggleList(list) {
    list.classList.toggle('show-list');
}

// Add click event listeners to the buttons
skillsButton.addEventListener('click', () => toggleList(skillsList));
experienceButton.addEventListener('click', () => toggleList(experienceList));
projectsButton.addEventListener('click', () => toggleList(projectsList));

