document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");
  const sections = document.querySelectorAll(".section");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetSection = event.target.getAttribute("data-section");

      sections.forEach((section) => {
        section.classList.remove("active");
      });

      document.getElementById(targetSection).classList.add("active");
    });
  });
});
