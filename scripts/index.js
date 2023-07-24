let menuToggle = document.querySelector(".menu-toggle");
let sidebar = document.querySelector(".sidebar");
let navLinks = document.querySelectorAll(".menu-item");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("is-active");
  sidebar.classList.toggle("is-active");
});

navLinks.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    document.querySelector(".is-active").classList.remove("is-active");
    navItem.classList.add("is-active");
    sidebar.classList.remove("is-active");
  });
});
