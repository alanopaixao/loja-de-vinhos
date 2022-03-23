const date = (document.getElementById("date").innerHTML = new Date().getFullYear());
// setup nav
const navBtn = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');
// show nav
if (navBtn) {
  navBtn.addEventListener('click', () => {
    navbar.classList.add('showNav');
  });
}
// close nav
if (navClose) {
  navClose.addEventListener('click', () => {
    navbar.classList.remove('showNav');
  });
}

