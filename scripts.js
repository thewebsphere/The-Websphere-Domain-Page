document.addEventListener('DOMContentLoaded', function() {
    // Add click event to the Explore button to navigate to library.html
    const exploreButton = document.getElementById('exploreButton');
    if (exploreButton) {
      exploreButton.addEventListener('click', function() {
        window.location.href = 'library.html';
      });
    }
  });
  