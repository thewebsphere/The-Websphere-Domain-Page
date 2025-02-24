document.addEventListener('DOMContentLoaded', function() {
  // Navigate to library.html when the Explore button is clicked
  const exploreButton = document.getElementById('exploreButton');
  if (exploreButton) {
    exploreButton.addEventListener('click', function() {
      window.location.href = 'library.html';
    });
  }
});
