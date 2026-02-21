/* ═══════════════════════════════════════════════
   SERENA'S DESIGN — script.js
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. PARTICLES ─────────────────────────────── */
  const container = document.getElementById('particles-container');
  if (container) {
    for (let i = 0; i < 50; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left   = Math.random() * 100 + '%';
      p.style.top    = Math.random() * 100 + '%';
      p.style.animationDelay    = (Math.random() * 20) + 's';
      p.style.animationDuration = (15 + Math.random() * 10) + 's';
      const size = 1 + Math.random() * 2;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      container.appendChild(p);
    }
  }

  /* ── 2. NAVBAR SCROLL ─────────────────────────── */
  const navbar = document.getElementById('navbar');
  const onScroll = debounce(() => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, 10);
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── 3. HAMBURGER MENU ────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close on link click
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  /* ── 4. SMOOTH SCROLL ─────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── 5. SCROLL REVEAL ─────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings inside same parent
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        siblings.forEach((el, idx) => {
          if (!el.classList.contains('visible')) {
            setTimeout(() => el.classList.add('visible'), idx * 100);
          }
        });
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ── 6. ANIMATED COUNTERS ─────────────────────── */
  const statEls = document.querySelectorAll('.stat-number');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statEls.forEach(el => counterObserver.observe(el));

  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current);
      }
    }, 16);
  }

  /* ── 7. FLIP CARDS — MOBILE TOUCH ────────────── */
  // On mobile, tap to flip instead of hover
  if (window.matchMedia('(hover: none)').matches) {
    document.querySelectorAll('.service-card-flip').forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });
  }

  /* ── 8. PARALLAX (subtle) ─────────────────────── */
  const heroBg = document.querySelector('.hero-bg-gradient');
  const heroPlaceholder = document.querySelector('.hero-image-wrapper');
  window.addEventListener('scroll', debounce(() => {
    const scrolled = window.scrollY;
    if (heroBg) heroBg.style.transform = `translateY(${scrolled * 0.15}px)`;
    if (heroPlaceholder) heroPlaceholder.style.transform = `translateY(${scrolled * 0.05}px)`;
  }, 8), { passive: true });

  /* ── 9. ACTIVE NAV LINK ON SCROLL ────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

  // Highlight active nav link
  const style = document.createElement('style');
  style.textContent = `.nav-link.active { color: var(--text-primary); } .nav-link.active::after { width: 100%; }`;
  document.head.appendChild(style);

  /* ── UTILITY ──────────────────────────────────── */
  function debounce(fn, wait) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
  }

});
