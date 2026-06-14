window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const top = section.offsetTop - 80;
    const height = section.offsetHeight;

    if (
      window.scrollY >= top &&
      window.scrollY < top + height
    ) {
      current = section.id;
    }
  });

  const sectionMap = {
    about: 'home',
    skills: 'home',
    experience: 'home'
  };

  current = sectionMap[current] || current;

  navLinks.forEach(link => {
    link.classList.toggle(
      'active',
      link.getAttribute('href') === `#${current}`
    );
  });
});