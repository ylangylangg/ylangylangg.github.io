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
    home: 'home',
    skills: 'skills',
    projects : 'projects'
  };
  

  current = sectionMap[current] || current;

  navLinks.forEach(link => {
    link.classList.toggle(
      'active',
      link.getAttribute('href') === `#${current}`
    );
  });
});