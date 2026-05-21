const sectionAnchors = document.querySelectorAll('.nav-link[href^="#"]');
const mainSections = Array.from(sectionAnchors).map((link) => {
  const id = link.getAttribute('href');
  return {
    link,
    section: document.querySelector(id)
  };
}).filter((item) => item.section);

for (const { link } of mainSections) {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    if (!section) return;

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', link.getAttribute('href'));
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      const id = `#${entry.target.id}`;
      const nav = document.querySelector(`.nav-link[href="${id}"]`);
      if (!nav) continue;

      if (entry.isIntersecting) {
        mainSections.forEach((item) => item.link.classList.remove('active'));
        nav.classList.add('active');
      }
    }
  },
  {
    rootMargin: '-40% 0px -45% 0px',
    threshold: 0,
  }
);

for (const { section } of mainSections) {
  observer.observe(section);
}

document.getElementById('year').textContent = String(new Date().getFullYear());
