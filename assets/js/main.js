(function () {
  "use strict";

  var C = window.CONFIG;
  if (!C) return;

  var waUrl = "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(C.whatsappMsg);

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  // Textos simples: <span data-cfg="crp"></span>
  document.querySelectorAll("[data-cfg]").forEach(function (n) {
    var v = C[n.getAttribute("data-cfg")];
    if (v) n.textContent = v;
  });

  // Temas
  var grid = document.getElementById("temas-grid");
  if (grid && C.temas) {
    var cta = grid.querySelector(".foco-cta");
    C.temas.forEach(function (t) {
      var a = el("article", "foco");
      a.appendChild(el("h3", "", t.titulo));
      a.appendChild(el("blockquote", "", t.frase));
      a.appendChild(el("p", "", t.texto));
      grid.insertBefore(a, cta);
    });
  }

  // FAQ
  var faq = document.getElementById("faq-list");
  if (faq && C.faq) {
    C.faq.forEach(function (f, i) {
      var d = el("details");
      if (i === 0) d.open = true;
      d.appendChild(el("summary", "", f.pergunta));
      d.appendChild(el("p", "", f.resposta));
      faq.appendChild(d);
    });
  }

  // Links do WhatsApp e Instagram
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = waUrl;
    a.target = "_blank";
    a.rel = "noopener";
    a.addEventListener("click", function () {
      var origem = a.getAttribute("data-wa");
      // Evento de conversão. Descomente quando o Pixel/GA4 estiver instalado.
      // if (window.gtag) gtag("event", "click_whatsapp", { botao: origem });
      // if (window.fbq) fbq("trackCustom", "click_whatsapp", { botao: origem });
      void origem;
    });
  });
  document.querySelectorAll("[data-instagram]").forEach(function (a) {
    a.href = C.instagram;
  });
  document.querySelectorAll("[data-avaliacoes]").forEach(function (a) {
    if (C.avaliacoesUrl) a.href = C.avaliacoesUrl;
    else a.remove();
  });

  // Ano do rodapé
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  // Header compacto e botão flutuante após 300px
  var header = document.querySelector(".site-header");
  var flutuante = document.querySelector(".wa-float");
  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle("is-compact", y > 40);
    flutuante.classList.toggle("is-visible", y > 300);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Menu mobile
  var menuBtn = document.querySelector(".menu-btn");
  var nav = document.getElementById("menu");
  menuBtn.addEventListener("click", function () {
    var aberto = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!aberto));
    nav.classList.toggle("is-open", !aberto);
  });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      menuBtn.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
})();
