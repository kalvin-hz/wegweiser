let navMenu = document.getElementById("nav-menu")

navMenu.addEventListener("click", toggleNavMenu)

function toggleNavMenu() {
  const x = document.getElementById("nav-links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}