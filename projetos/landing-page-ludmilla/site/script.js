/* ================================================================
   CONFIGURAÇÕES PRINCIPAIS — EDITE SOMENTE OS VALORES ENTRE ASPAS
   ================================================================ */
const SITE = {
  crp: "CRP 05/00000",
  telefone: "+55 (21) 91234-5678",
  whatsappNumero: "5521912345678", // Apenas números, com DDI + DDD
  whatsappMensagem: "Olá, Ludmilla! Gostaria de agendar uma consulta.",
  email: "ludmilla@lnpsicologia.com.br",
  instagramUsuario: "psiludmillaneres", // Sem @
  endereco: "Rua Exemplo, 000 — Botafogo, Rio de Janeiro, RJ"
};

/* Não é necessário alterar nada abaixo desta linha. */
const ICONS = {
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  'message-circle': '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>',
  'arrow-down-right': '<path d="m7 7 10 10M17 7v10H7"/>',
  'arrow-left': '<path d="m15 18-6-6 6-6"/>',
  'arrow-right': '<path d="m9 18 6-6-6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  'graduation-cap': '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5M22 10v6"/>',
  sparkles: '<path d="m12 3-1.1 3.1a2 2 0 0 1-1.2 1.2L6.5 8.5l3.2 1.1a2 2 0 0 1 1.2 1.2L12 14l1.1-3.2a2 2 0 0 1 1.2-1.2l3.2-1.1-3.2-1.2a2 2 0 0 1-1.2-1.2L12 3Z"/><path d="m19 15-.6 1.6a1 1 0 0 1-.6.6l-1.6.6 1.6.6a1 1 0 0 1 .6.6l.6 1.6.6-1.6a1 1 0 0 1 .6-.6l1.6-.6-1.6-.6a1 1 0 0 1-.6-.6L19 15Z"/>',
  waves: '<path d="M2 6c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2M2 12c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2M2 18c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 2.8 20 4 20 4s1.2 4.5-2.1 10.2A7 7 0 0 1 11 20Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6.94C9.47 12.9 12.16 12 16 12"/>',
  sunrise: '<path d="M12 2v2M4.93 4.93l1.42 1.42M2 12h2M20 12h2M17.66 6.34l1.41-1.41M22 18H2M8 22h8M12 8a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4Z"/>',
  'heart-handshake': '<path d="M19.5 12.6 12 20l-7.5-7.4A5 5 0 0 1 12 6a5 5 0 0 1 7.5 6.6Z"/><path d="m8 12 2 2 4-4"/>',
  brain: '<path d="M9.5 4A3.5 3.5 0 0 0 6 7.5v.3A3.5 3.5 0 0 0 4.5 14v.5A3.5 3.5 0 0 0 8 18h1.5V4ZM14.5 4A3.5 3.5 0 0 1 18 7.5v.3a3.5 3.5 0 0 1 1.5 6.2v.5A3.5 3.5 0 0 1 16 18h-1.5V4ZM9.5 8H8M14.5 8H16M9.5 14H8M14.5 14H16"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
  ear: '<path d="M6 8.5a6 6 0 0 1 12 0c0 4-3 4.5-3 8a3 3 0 0 1-6 0M10 8.5a2 2 0 0 1 4 0c0 2-2 2-2 4"/>',
  sprout: '<path d="M7 20h10M12 20v-8M12 12C7 12 4 9 4 4c5 0 8 3 8 8ZM12 14c5 0 8-3 8-8-5 0-8 3-8 8Z"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  home: '<path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
  quote: '<path d="M3 21c3 0 7-1 7-8V5H4v8h4c0 4-2 5-5 5v3ZM14 21c3 0 7-1 7-8V5h-6v8h4c0 4-2 5-5 5v3Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none"/>',
  'map-pin': '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>'
};

function renderIcons() {
  document.querySelectorAll('[data-icon]').forEach((el) => {
    const name = el.dataset.icon;
    const content = ICONS[name];
    if (!content) return;
    el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${content}</svg>`;
  });
}

function fillSiteData() {
  const whatsappUrl = `https://wa.me/${SITE.whatsappNumero}?text=${encodeURIComponent(SITE.whatsappMensagem)}`;
  document.querySelectorAll('.js-whatsapp').forEach((a) => {
    a.href = whatsappUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });
  document.querySelectorAll('.js-crp').forEach((el) => el.textContent = SITE.crp);
  document.querySelectorAll('.js-crp-short').forEach((el) => el.textContent = SITE.crp.replace(/^CRP\s*/i, ''));
  document.querySelectorAll('.js-phone').forEach((el) => el.textContent = SITE.telefone);
  document.querySelectorAll('.js-email').forEach((el) => el.textContent = SITE.email);
  document.querySelectorAll('.js-email-link').forEach((a) => a.href = `mailto:${SITE.email}`);
  document.querySelectorAll('.js-instagram-label').forEach((el) => el.textContent = `@${SITE.instagramUsuario}`);
  document.querySelectorAll('.js-instagram-link').forEach((a) => {
    a.href = `https://instagram.com/${SITE.instagramUsuario}`;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });
  document.querySelectorAll('.js-address').forEach((el) => el.textContent = SITE.endereco);
  document.getElementById('current-year').textContent = new Date().getFullYear();
}

function setupHeader() {
  const header = document.getElementById('site-header');
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  const setMenu = (open) => {
    mobileMenu.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    menuButton.dataset.icon = open ? 'x' : 'menu';
    renderIcons();
  };

  menuButton.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('open')));
  mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 24);
    document.getElementById('whatsapp-fab').classList.toggle('visible', window.scrollY > 600);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const navLinks = [...document.querySelectorAll('.desktop-nav > a[href^="#"]')];
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${visible.target.id}`));
    }, { threshold: [0.2, 0.5], rootMargin: '-20% 0px -50% 0px' });
    sections.forEach((section) => observer.observe(section));
  }
}

function setupReveal() {
  const items = document.querySelectorAll('.reveal:not(.is-visible)');
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -50px' });
  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 5, 4) * 45}ms`;
    observer.observe(item);
  });
}

function setupFaq() {
  document.querySelectorAll('.faq-list details').forEach((details) => {
    details.addEventListener('toggle', () => {
      if (!details.open) return;
      document.querySelectorAll('.faq-list details').forEach((other) => {
        if (other !== details) other.open = false;
      });
    });
  });
}

function setupTestimonials() {
  const track = document.getElementById('testimonial-track');
  const slides = [...track.children];
  const dots = document.getElementById('testimonial-dots');
  let current = 0;
  let timer;

  slides.forEach((_, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'testimonial-dot';
    button.setAttribute('aria-label', `Ir para o depoimento ${index + 1}`);
    button.addEventListener('click', () => goTo(index));
    dots.appendChild(button);
  });

  const update = () => {
    track.style.transform = `translateX(-${current * 100}%)`;
    [...dots.children].forEach((dot, index) => dot.classList.toggle('active', index === current));
  };
  const restart = () => {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1, false), 7000);
  };
  const goTo = (index, shouldRestart = true) => {
    current = (index + slides.length) % slides.length;
    update();
    if (shouldRestart) restart();
  };

  document.getElementById('testimonial-prev').addEventListener('click', () => goTo(current - 1));
  document.getElementById('testimonial-next').addEventListener('click', () => goTo(current + 1));
  update();
  restart();
}

renderIcons();
fillSiteData();
setupHeader();
setupReveal();
setupFaq();
setupTestimonials();
