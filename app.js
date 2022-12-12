// setup date
const dt = new Date();
document.getElementById("date").innerHTML = dt.getFullYear();
// setup nav
const navBtn = document.getElementById("nav_btn");
const navBar = document.getElementById("navbar");
const navClose = document.getElementById("nav_close");
// show nav
navBtn.addEventListener("click", () => {
  navBar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navBar.classList.remove("showNav");
});
