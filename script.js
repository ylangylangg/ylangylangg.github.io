const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

let currentActive = '';

// Click handler
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    currentActive = link.getAttribute('href');
  });
});

// Scroll handler
window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  if (!current) return;

  navLinks.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});