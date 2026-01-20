// Hampparivalikon toiminnallisuus
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Sulje menu kun klikataan linkkiä (mobiilissa)
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});
