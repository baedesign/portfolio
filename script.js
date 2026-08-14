/* ==========================================================
   BAEDESIGN — INTERAÇÕES E RENDERIZAÇÃO
   Em geral você não precisa editar este arquivo.
   Conteúdo fica em data.js.
   ========================================================== */

(() => {
  const data = window.BAE_DATA;
  if (!data) return;
  const { site, projects, experience, expertise } = data;
  const pageType = document.body.dataset.page;
  const isCase = pageType === "case" || pageType === "case-custom";
  const base = isCase ? "../../" : "";

  const asset = (path) => base + path;
  // Use o arquivo explicitamente para funcionar tanto em servidor quanto abrindo o HTML localmente.
  const projectUrl = (slug) => base + `projetos/${slug}/index.html`;
  const homeUrl = (hash = "") => base + `index.html${hash}`;

  // ---------- Conteúdo global ----------
  document.querySelectorAll("[data-site-name]").forEach(el => el.textContent = site.name);
  document.querySelectorAll("[data-site-person]").forEach(el => el.textContent = site.person);
  document.querySelectorAll("[data-site-role]").forEach(el => el.textContent = site.role);
  document.querySelectorAll("[data-site-location]").forEach(el => el.textContent = site.location);
  document.querySelectorAll("[data-site-email]").forEach(el => el.textContent = site.email);
  document.querySelectorAll("[data-site-tagline]").forEach(el => el.textContent = site.tagline);

  document.querySelectorAll("[data-link='linkedin']").forEach(el => el.href = site.linkedin);
  document.querySelectorAll("[data-link='behance']").forEach(el => el.href = site.behance);
  document.querySelectorAll("[data-link='instagram']").forEach(el => el.href = site.instagram);
  document.querySelectorAll("[data-link='email']").forEach(el => el.href = `mailto:${site.email}`);
  document.querySelectorAll("[data-link='whatsapp']").forEach(el => el.href = site.whatsapp);
  document.querySelectorAll("[data-link='resume']").forEach(el => el.href = asset(site.resume));
  document.querySelectorAll("[data-home]").forEach(el => el.href = homeUrl());
  document.querySelectorAll("[data-home-projects]").forEach(el => el.href = homeUrl("#projetos"));
  document.querySelectorAll("[data-home-about]").forEach(el => el.href = homeUrl("#sobre"));
  document.querySelectorAll("[data-home-experience]").forEach(el => el.href = homeUrl("#experiencia"));
  document.querySelectorAll("[data-home-contact]").forEach(el => el.href = homeUrl("#contato"));

  // ---------- Header ----------
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".mobile-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const setScrolled = () => header?.classList.toggle("scrolled", window.scrollY > 24);
  setScrolled();
  window.addEventListener("scroll", setScrolled, { passive:true });

  const setMobileMenu = (open) => {
    mobileNav?.classList.toggle("open", open);
    header?.classList.toggle("menu-open", open);
    document.body.classList.toggle("mobile-menu-open", open);

    if (toggle) {
      toggle.textContent = open ? "Fechar" : "Menu";
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    }
  };

  toggle?.addEventListener("click", () => {
    setMobileMenu(!mobileNav?.classList.contains("open"));
  });

  mobileNav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    setMobileMenu(false);
  }));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileNav?.classList.contains("open")) {
      setMobileMenu(false);
      toggle?.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900 && mobileNav?.classList.contains("open")) {
      setMobileMenu(false);
    }
  });

  // ---------- Home: projetos ----------
  const projectList = document.querySelector("#project-list");
  if (projectList) {
    projectList.innerHTML = projects.map(project => {
      const full = project.format === "full";
      const projectName = project.displayName || project.client;
      return `
        <article class="project-card format-${project.format} rule reveal">
          <a href="${projectUrl(project.slug)}" aria-label="Ver case ${projectName}: ${project.title}">
            <div class="project-top">
              <div class="project-name-wrap">
                <span class="label orange">${project.index}</span>
                <h3 class="display project-name">${projectName}</h3>
              </div>
              <span class="label">${project.year}</span>
            </div>

            <div class="project-layout">
              <div class="project-media">
                <img src="${asset(project.cover)}" alt="${project.coverAlt}" loading="lazy" decoding="async">
              </div>
              <div class="project-content">
                <div class="project-content-head">
                  <p class="label">${project.category}</p>
                  <h4 class="display project-title">${project.title}</h4>
                </div>
                <div class="project-content-body">
                  <p class="project-description">${project.description}</p>
                  <p class="project-impact">${project.impact}</p>
                  <span class="project-link">Ver case <span>→</span></span>
                </div>
              </div>
            </div>
          </a>
        </article>`;
    }).join("");
  }

  // ---------- Home: experiência ----------
  const experienceList = document.querySelector("#experience-list");
  if (experienceList) {
    experienceList.innerHTML = experience.map(item => `
      <li class="experience-item rule reveal">
        <p class="label">${item.period}</p>
        <h3 class="display experience-company">${item.company}</h3>
        <p class="experience-role">${item.role}</p>
        ${item.note ? `<p class="experience-note">“${item.note}”</p>` : ""}
      </li>`).join("");
  }

  // ---------- Home: expertise ----------
  const expertiseList = document.querySelector("#expertise-list");
  if (expertiseList) {
    expertiseList.innerHTML = expertise.map(word => `<li class="expertise-item rule reveal" data-cursor-hot>${word}</li>`).join("");
  }

  // ---------- Case page ----------
  // Cases customizados (como Sole) já têm o conteúdo escrito no próprio HTML.
  if (pageType === "case") renderCase();

  function renderCase() {
    const slug = document.body.dataset.projectSlug;
    const project = projects.find(p => p.slug === slug);
    if (!project) return;
    const current = projects.findIndex(p => p.slug === slug);
    const next = projects[(current + 1) % projects.length];

    document.title = `${project.client} — ${project.title} | Bernardo Ramalho`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", project.description);

    const hero = document.querySelector("#case-hero");
    hero.innerHTML = `
      <div class="mask"><span><p class="label orange">${project.index} — ${project.client}</p></span></div>
      <div class="mask"><span><h1 class="display case-title">${project.title}</h1></span></div>
      <div class="case-meta reveal">
        <div><p class="label">Cliente</p><p class="case-meta-value">${project.client}</p></div>
        <div><p class="label">Ano</p><p class="case-meta-value">${project.year}</p></div>
        <div><p class="label">Minha atuação</p><p class="case-meta-value">${project.role}</p></div>
        <div><p class="label">Disciplinas</p><ul class="case-disciplines">${project.disciplines.map(d => `<li>${d}</li>`).join("")}</ul></div>
      </div>
      <div class="case-cover reveal"><img src="${asset(project.cover)}" alt="${project.coverAlt}" decoding="async"></div>`;

    document.querySelector("#case-impact").textContent = project.impact;

    document.querySelector("#case-sections").innerHTML = project.blocks.map(block => `
      <section class="case-section reveal">
        <p class="label">${block.label}</p>
        <div>
          <h2 class="display case-section-title">${block.heading}</h2>
          <div class="case-section-body">${block.body.map(p => `<p>${p}</p>`).join("")}</div>
        </div>
      </section>`).join("");

    document.querySelector("#case-gallery").innerHTML = project.gallery.map(item => `
      <div class="gallery-item ${item.span === "full" ? "full" : ""} reveal">
        <img src="${asset(item.src)}" alt="${item.alt}" loading="lazy" decoding="async">
      </div>`).join("");

    document.querySelector("#case-results").innerHTML = project.results.map(result => `
      <li class="result-item reveal">
        <p class="label orange">${result.label}</p>
        <p class="result-value">${result.value}</p>
      </li>`).join("");

    const nextLink = document.querySelector("#next-project");
    nextLink.href = projectUrl(next.slug);
    nextLink.querySelector(".next-project-name").textContent = next.displayName || next.client;
  }

  // ---------- Reveal ----------
  const revealItems = () => document.querySelectorAll(".reveal, .mask");
  if (!("IntersectionObserver" in window)) {
    revealItems().forEach(el => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin:"0px 0px -9% 0px", threshold:.04 });
    revealItems().forEach((el, i) => {
      el.style.transitionDelay = `${Math.min((i % 4) * 55, 165)}ms`;
      observer.observe(el);
    });
  }

  // ---------- Active nav ----------
  if (!isCase && "IntersectionObserver" in window) {
    const sections = ["projetos", "sobre", "experiencia", "contato"];
    const links = document.querySelectorAll(".desktop-nav .nav-link");
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { rootMargin:"-35% 0px -55% 0px", threshold:0 });
    sections.forEach(id => { const el = document.getElementById(id); if (el) sectionObserver.observe(el); });
  }

  // ---------- Custom cursor ----------
  const finePointer = window.matchMedia("(pointer:fine)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  if (finePointer && !reduced) {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    let x = innerWidth/2, y = innerHeight/2, rx = x, ry = y;
    window.addEventListener("mousemove", e => {
      x = e.clientX; y = e.clientY;
      dot.style.transform = `translate3d(${x}px,${y}px,0)`;
      const hot = Boolean(e.target.closest("a,button,[data-cursor-hot]"));
      ring.classList.toggle("hot", hot);
    }, { passive:true });
    const loop = () => {
      rx += (x-rx)*.17; ry += (y-ry)*.17;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      requestAnimationFrame(loop);
    };
    loop();
  }
})();
