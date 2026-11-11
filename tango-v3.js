/* Tango v3 · barres de répartition : elles se remplissent à l'arrivée à l'écran */
(function () {
  var bars = document.querySelectorAll('.v3-split-bar');
  if (!bars.length) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) { bars.forEach(function (b) { b.classList.add('is-in'); }); return; }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.4 });
  bars.forEach(function (b) { b.classList.add('is-armed'); io.observe(b); });
})();

/* Tango v3 · section équipe : bascule entre « L'équipe » et « Mon rôle » */
(function () {
  var sec = document.getElementById('equipe');
  if (!sec) return;
  var btns = sec.querySelectorAll('[data-mode-btn]');
  function set(mode) {
    sec.setAttribute('data-mode', mode);
    btns.forEach(function (b) { var on = b.dataset.modeBtn === mode; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
    sec.querySelectorAll('[data-show]').forEach(function (p) { p.hidden = p.dataset.show !== mode; });
  }
  btns.forEach(function (b) { b.addEventListener('click', function () { set(b.dataset.modeBtn); }); });
})();

/* Tango v3 · bascule Avant / Après, et persona (John / Emily) quand la figure en propose */
(function () {
  document.querySelectorAll('.v3-ba').forEach(function (fig) {
    var btns = fig.querySelectorAll('[data-ba]'), pbtns = fig.querySelectorAll('[data-persona]');
    var art = fig.closest('article') || fig;
    var state = fig.getAttribute('data-state') || 'before', persona = 'john';
    function render() {
      var k = (pbtns.length && persona !== 'john') ? persona + '-' + state : state;
      fig.setAttribute('data-state', state);
      btns.forEach(function (b) { var on = b.dataset.ba === state; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      pbtns.forEach(function (b) { var on = b.dataset.persona === persona; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      fig.querySelectorAll('[data-ba-img]').forEach(function (i) { i.classList.toggle('is-on', i.dataset.baImg === k); });
      fig.querySelectorAll('[data-ba-for]').forEach(function (el) { if (el.getAttribute('data-ba-for') === k) el.removeAttribute('hidden'); else el.setAttribute('hidden', ''); });
      art.querySelectorAll('[data-persona-for]').forEach(function (el) { el.hidden = el.dataset.personaFor !== persona; });
    }
    btns.forEach(function (b) { b.addEventListener('click', function () { state = b.dataset.ba; render(); }); });
    pbtns.forEach(function (b) { b.addEventListener('click', function () { persona = b.dataset.persona; render(); }); });
    var eye = fig.querySelector('[data-annot-toggle]');
    if (eye) eye.addEventListener('click', function () {
      var show = eye.getAttribute('aria-pressed') !== 'true';
      eye.setAttribute('aria-pressed', show ? 'true' : 'false');
      var en = document.documentElement.lang === 'en';
      var lbl = show ? (en ? 'Hide annotations' : 'Masquer les annotations') : (en ? 'Show annotations' : 'Afficher les annotations');
      eye.removeAttribute('data-aria-label-fr'); eye.removeAttribute('data-aria-label-en'); eye.removeAttribute('data-title-fr'); eye.removeAttribute('data-title-en');
      eye.setAttribute('aria-label', lbl); eye.title = lbl;
      fig.classList.toggle('is-noannot', !show);
    });
  });
})();

/* Tango v3 · zoom sur les visuels des projets phares */
(function () {
  var targets = document.querySelectorAll('.pv-pairs .v3-ba-stage, .pv-pairs .pv-shot > img');
  if (!targets.length) return;
  var box = document.createElement('div');
  box.className = 'v3-zoom'; box.hidden = true;
  box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.setAttribute('aria-label', 'Visuel agrandi');
  box.innerHTML = '<button type="button" class="v3-zoom-close" aria-label="Fermer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button><div class="v3-zoom-body"></div>';
  (document.querySelector('main.v3') || document.body).appendChild(box);
  var body = box.querySelector('.v3-zoom-body'), closeBtn = box.querySelector('.v3-zoom-close'), last = null;
  function open(t) {
    last = t; body.innerHTML = '';
    var fig = t.closest('.v3-ba'), node, img;
    if (t.classList.contains('v3-ba-stage')) {
      node = t.cloneNode(true);
      node.removeAttribute('tabindex'); node.removeAttribute('role'); node.removeAttribute('aria-label');
      if (fig && fig.classList.contains('is-noannot')) node.classList.add('is-noannot');
      img = t.querySelector('.v3-ba-img.is-on') || t.querySelector('img');
    } else { node = t.cloneNode(true); img = t; }
    node.querySelectorAll('img').forEach(function (i) { i.loading = 'eager'; });
    var r = (img.naturalWidth && img.naturalHeight) ? img.naturalWidth / img.naturalHeight : (+img.getAttribute('width') / +img.getAttribute('height')) || 1;
    node.classList.add('v3-zoom-item');
    node.style.width = 'min(94vw, calc((100vh - 96px) * ' + r + '))';
    node.style.maxWidth = 'none';
    body.appendChild(node);
    box.hidden = false; document.documentElement.classList.add('v3-zoom-lock');
    closeBtn.focus();
  }
  function close() {
    box.hidden = true; body.innerHTML = ''; document.documentElement.classList.remove('v3-zoom-lock');
    if (last) last.focus();
  }
  targets.forEach(function (t) {
    t.classList.add('v3-zoomable');
    t.setAttribute('tabindex', '0'); t.setAttribute('role', 'button'); t.setAttribute('aria-label', 'Agrandir le visuel');
    t.addEventListener('click', function (e) { if (e.target.closest('button')) return; open(t); });
    t.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(t); } });
  });
  function relabel() {
    var en = document.documentElement.lang === 'en';
    box.setAttribute('aria-label', en ? 'Enlarged visual' : 'Visuel agrandi');
    closeBtn.setAttribute('aria-label', en ? 'Close' : 'Fermer');
    targets.forEach(function (t) { t.setAttribute('aria-label', en ? 'Enlarge visual' : 'Agrandir le visuel'); });
  }
  document.addEventListener('tango:lang', relabel); relabel();
  closeBtn.addEventListener('click', close);
  box.addEventListener('click', function (e) { if (e.target === box || e.target === body) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !box.hidden) close(); });
})();
