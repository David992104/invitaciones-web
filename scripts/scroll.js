// =======================
// SCROLL ANIMATIONS
// =======================
const observer =
  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: .5
  });

document
  .querySelectorAll(".section")
  .forEach(section => {
    observer.observe(section);
  });

document
  .querySelectorAll(".section .fade")
  .forEach(el => {
    observer.observe(el);
  });