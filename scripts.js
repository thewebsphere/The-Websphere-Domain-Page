document.addEventListener("DOMContentLoaded", function () {
  // Services Section Toggle
  const serviceToggles = document.querySelectorAll(".service-toggle"); // Select all service toggles
  serviceToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const targetList = document.querySelector(this.getAttribute("href"));
      if (targetList) {
        targetList.classList.toggle("show");
      }
    });
  });

  // Number Counter Animation When in View
  const counters = document.querySelectorAll(".completed-count");
  const speed = 200; // Adjust speed for animation

  function startCounter(counter) {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / speed;

    function updateCount() {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target; // Ensure final value is accurate
      }
    }

    updateCount();
  }

  // Intersection Observer to trigger the animation only when section is visible
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounter(entry.target);
          observer.unobserve(entry.target); // Stop observing once animation starts
        }
      });
    },
    { threshold: 0.5 } // Trigger when at least 50% of the section is visible
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});
