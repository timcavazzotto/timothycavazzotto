// ============================================================
// Comportamento compartilhado do site
// ============================================================

// Menu mobile
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Revelação suave ao rolar a página
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => observer.observe(el));
  }

  // Animação da curva de sobrevida (desenho progressivo do traço)
  const kmPath = document.querySelector('.km-path');
  if (kmPath) {
    const length = kmPath.getTotalLength();
    if (reduceMotion) {
      kmPath.style.strokeDasharray = 'none';
    } else {
      kmPath.style.strokeDasharray = String(length);
      kmPath.style.strokeDashoffset = String(length);
      // força reflow antes de animar
      kmPath.getBoundingClientRect();
      kmPath.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(.4,0,.2,1) 0.2s';
      requestAnimationFrame(() => {
        kmPath.style.strokeDashoffset = '0';
      });
    }
  }
});
