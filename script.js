/* ==========================================================================
   Instituto Priscila Correia — interações da landing page
   Sem dependências externas.
   ========================================================================== */
(function () {
  'use strict';

  // Número de WhatsApp usado pelo formulário (somente dígitos, com DDI e DDD)
  var WHATSAPP_NUMBER = '5533984108874';

  document.documentElement.classList.add('js');

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu-principal');

  function closeMenu() {
    if (!nav.classList.contains('is-open')) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.querySelector('.sr-only').textContent = 'Abrir menu';
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.querySelector('.sr-only').textContent = open ? 'Fechar menu' : 'Abrir menu';
    });

    // Fecha ao clicar em um link do menu
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });

    // Fecha com a tecla Esc
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeMenu(); toggle.focus(); }
    });

    // Fecha ao voltar para o layout de desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 900) closeMenu();
    });
  }

  /* ---------- Header com sombra ao rolar ---------- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Link ativo no menu conforme a seção visível ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
  if ('IntersectionObserver' in window && navLinks.length) {
    var sections = navLinks
      .map(function (a) { return document.querySelector(a.getAttribute('href')); })
      .filter(Boolean);

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) { sectionObserver.observe(s); });
  }

  /* ---------- Animação de entrada dos blocos ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Formulário -> WhatsApp ---------- */
  var form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nome = form.nome.value.trim();
      var interesse = form.interesse.value;
      var mensagem = form.mensagem.value.trim();
      var valid = true;

      function setError(field, text) {
        var el = document.getElementById(field.id + '-erro');
        field.setAttribute('aria-invalid', text ? 'true' : 'false');
        if (text) field.setAttribute('aria-describedby', field.id + '-erro');
        else field.removeAttribute('aria-describedby');
        if (el) el.textContent = text;
        if (text && valid) { field.focus(); valid = false; }
      }

      setError(form.nome, nome.length < 2 ? 'Informe seu nome.' : '');
      setError(form.interesse, !interesse ? 'Selecione uma opção.' : '');
      if (!valid) return;

      var texto = 'Olá, Dra. Priscila! Meu nome é ' + nome + '.\n' +
                  'Tenho interesse em: ' + interesse + '.';
      if (mensagem) texto += '\n' + mensagem;

      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(texto);
      var win = window.open(url, '_blank');
      if (win) { win.opener = null; } else { window.location.href = url; } // caso o navegador bloqueie a nova aba
    });
  }

  /* ---------- Ano atual no rodapé ---------- */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
