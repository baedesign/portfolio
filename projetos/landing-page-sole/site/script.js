/* ===== JAVASCRIPT DA LANDING PAGE — EDITE AQUI ===== */
/* =========================================================
   SOLE CONTABILIDADE — main.js
   1. Header sticky
   2. Menu mobile
   3. Scroll suave
   4. Reveal on scroll (IntersectionObserver)
   5. Formulário: validação + integração futura
   ========================================================= */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. HEADER STICKY ---------- */
  var header = document.getElementById("site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-stuck", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- 2. MENU MOBILE ---------- */
  var burger = document.getElementById("burger");
  var mobileMenu = document.getElementById("mobile-menu");

  function setMenu(open) {
    if (!burger || !mobileMenu) return;
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    mobileMenu.hidden = !open;
  }

  if (burger && mobileMenu) {
    burger.addEventListener("click", function () {
      setMenu(burger.getAttribute("aria-expanded") !== "true");
    });
    mobileMenu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1024) setMenu(false);
    });
  }

  /* ---------- 3. SCROLL SUAVE (com compensação do header) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var offset = header ? header.offsetHeight - 1 : 0;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: reduceMotion ? "auto" : "smooth" });
      history.replaceState(null, "", id);
    });
  });

  /* ---------- 4. REVEAL ON SCROLL ---------- */
  var revealItems = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.style.transitionDelay = Math.min(i * 70, 280) + "ms";
        el.classList.add("is-visible");
        observer.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealItems.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- 5. FORMULÁRIO ---------- */
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  /**
   * PONTO DE INTEGRAÇÃO FUTURA.
   * Substitua o corpo desta função pelo envio real dos dados:
   * WhatsApp (wa.me), Formspree, Google Forms, Webhook, CRM ou API própria.
   * Ex.: return fetch("https://sua-api.com/leads", {
   *        method: "POST",
   *        headers: { "Content-Type": "application/json" },
   *        body: JSON.stringify(data)
   *      });
   * @param {{nome:string,email:string,telefone:string,empresa:string,mensagem:string}} data
   * @returns {Promise<void>}
   */
  function enviarLeadSole(data) {
    // Nenhum backend está conectado ainda — apenas registramos localmente.
    console.info("[Sole] Lead pronto para integração:", data);
    return Promise.resolve();
  }

  var rules = {
    nome: function (v) { return v.trim().length >= 2 ? "" : "Informe seu nome completo."; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v.trim()) ? "" : "Informe um e-mail válido."; },
    telefone: function (v) { return v.replace(/\D/g, "").length >= 10 ? "" : "Informe um telefone com DDD."; },
    mensagem: function (v) { return v.trim().length >= 10 ? "" : "Conte-nos um pouco mais (mín. 10 caracteres)."; }
  };

  function showError(field, message) {
    var input = form.elements[field];
    var box = document.getElementById("err-" + field);
    if (!input || !box) return;
    if (message) {
      input.setAttribute("aria-invalid", "true");
      box.textContent = message;
      box.hidden = false;
    } else {
      input.removeAttribute("aria-invalid");
      box.textContent = "";
      box.hidden = true;
    }
  }

  if (form) {
    Object.keys(rules).forEach(function (field) {
      var input = form.elements[field];
      if (!input) return;
      input.addEventListener("blur", function () { showError(field, rules[field](input.value)); });
      input.addEventListener("input", function () {
        if (input.getAttribute("aria-invalid") === "true") showError(field, rules[field](input.value));
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstInvalid = null;

      Object.keys(rules).forEach(function (field) {
        var input = form.elements[field];
        var msg = rules[field](input.value);
        showError(field, msg);
        if (msg && !firstInvalid) firstInvalid = input;
      });

      if (firstInvalid) {
        status.textContent = "Revise os campos destacados para continuar.";
        status.classList.add("is-error");
        firstInvalid.focus();
        return;
      }

      var data = {
        nome: form.elements.nome.value.trim(),
        email: form.elements.email.value.trim(),
        telefone: form.elements.telefone.value.trim(),
        empresa: form.elements.empresa.value.trim(),
        mensagem: form.elements.mensagem.value.trim()
      };

      var button = form.querySelector('button[type="submit"]');
      button.disabled = true;
      status.classList.remove("is-error");
      status.textContent = "Enviando...";

      enviarLeadSole(data)
        .then(function () {
          form.reset();
          status.textContent = "Demonstração de interface: formulário preparado para integração com backend, CRM ou WhatsApp.";
        })
        .catch(function () {
          status.classList.add("is-error");
          status.textContent = "Não foi possível enviar agora. Tente novamente ou fale com a gente pelo WhatsApp.";
        })
        .finally(function () { button.disabled = false; });
    });
  }

  /* Ano do copyright */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
