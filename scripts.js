document.addEventListener('DOMContentLoaded', function() {
    const serviceToggle = document.getElementById('serviceToggle');
    const servicesList = document.getElementById('servicesList');
  
    serviceToggle.addEventListener('click', function() {
      servicesList.classList.toggle('show');
    });
  });
  