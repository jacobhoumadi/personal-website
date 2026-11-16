/* Tango e-commerce case study : zoom sur les visuels */
(function () {
  var shots = document.querySelectorAll('.tfu .tfu-shot');
  if (!shots.length) return;
  var box = document.createElement('div');
  box.className = 'tfu-zoom';
  box.hidden = true;
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.innerHTML = '<button type="button" aria-label="Fermer">×</button><img alt="">';
  document.body.appendChild(box);
  var img = box.querySelector('img'), btn = box.querySelector('button'), last = null;
  function en() { return document.documentElement.lang === 'en'; }
  function open(s) {
    var src = s.querySelector('img');
    img.src = src.currentSrc || src.src;
    img.alt = src.alt;
    btn.setAttribute('aria-label', en() ? 'Close' : 'Fermer');
    box.setAttribute('aria-label', en() ? 'Enlarged visual' : 'Visuel agrandi');
    last = s;
    box.hidden = false;
    document.documentElement.classList.add('tfu-zoom-lock');
    btn.focus();
  }
  function close() {
    box.hidden = true;
    document.documentElement.classList.remove('tfu-zoom-lock');
    if (last) last.focus();
  }
  shots.forEach(function (s) {
    s.addEventListener('click', function () { open(s); });
    s.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(s); }
    });
  });
  box.addEventListener('click', function (e) { if (e.target !== img) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !box.hidden) close(); });
})();

/* User stories : une planche par US, pagination + swipe, zoom au clic avec la même navigation */
(function () {
  var root = document.querySelector('.tfu .tfu-usc');
  if (!root) return;
  function en() { return document.documentElement.lang === 'en'; }
  function wire(car) {
    var track = car.querySelector('.tfu-usc-track');
    var slides = car.querySelectorAll('.tfu-usc-slide');
    var dots = car.querySelectorAll('.tfu-usc-dots button');
    var prev = car.querySelector('.tfu-usc-prev'), next = car.querySelector('.tfu-usc-next');
    var cur = 0;
    function label() {
      prev.setAttribute('aria-label', en() ? 'Previous user story' : 'User story précédente');
      next.setAttribute('aria-label', en() ? 'Next user story' : 'User story suivante');
    }
    function update(i) {
      cur = i;
      dots.forEach(function (d, k) { d.className = k === i ? 'on' : ''; d.setAttribute('aria-current', k === i ? 'true' : 'false'); });
      prev.disabled = i === 0; next.disabled = i === slides.length - 1;
      slides.forEach(function (s, k) { s.setAttribute('aria-hidden', k === i ? 'false' : 'true'); });
    }
    function go(i, smooth) {
      i = Math.max(0, Math.min(slides.length - 1, i));
      track.scrollTo({ left: slides[i].offsetLeft - track.offsetLeft, behavior: smooth === false ? 'auto' : 'smooth' });
      update(i);
    }
    var t;
    track.addEventListener('scroll', function () {
      clearTimeout(t);
      t = setTimeout(function () { update(Math.round(track.scrollLeft / track.clientWidth)); }, 60);
    }, { passive: true });
    prev.addEventListener('click', function () { go(cur - 1); });
    next.addEventListener('click', function () { go(cur + 1); });
    dots.forEach(function (d, k) { d.addEventListener('click', function () { go(k); }); });
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(cur + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(cur - 1); }
    });
    label(); update(0);
    return { go: go, cur: function () { return cur; }, track: track, label: label };
  }
  var inline = wire(root);

  // Zoom : même carrousel, en grand
  var box = document.createElement('div');
  box.className = 'tfu-car tfu-usc-modal';
  box.hidden = true;
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  (root.closest('.tfu') || document.body).appendChild(box);
  var modal = null, last = null;
  function open() {
    var clone = root.cloneNode(true);
    clone.classList.remove('rv'); clone.classList.add('in');
    var z = clone.querySelector('.tfu-usc-zoom'); if (z) z.remove();
    clone.querySelectorAll('img[loading]').forEach(function (im) { im.loading = 'eager'; });
    box.innerHTML = '<div class="tfu-car-box tfu-usc-big"><button type="button" class="tfu-car-close">×</button></div>';
    var inner = box.querySelector('.tfu-usc-big');
    inner.appendChild(clone);
    var closeBtn = inner.querySelector('.tfu-car-close');
    closeBtn.setAttribute('aria-label', en() ? 'Close' : 'Fermer');
    closeBtn.addEventListener('click', close);
    box.setAttribute('aria-label', en() ? 'User stories, enlarged' : 'User stories agrandies');
    last = document.activeElement;
    box.hidden = false;
    document.documentElement.classList.add('tfu-zoom-lock');
    modal = wire(clone);
    var i = inline.cur();
    requestAnimationFrame(function () { modal.go(i, false); });
    closeBtn.focus();
  }
  function close() {
    var i = modal ? modal.cur() : 0;
    box.hidden = true; box.innerHTML = ''; modal = null;
    document.documentElement.classList.remove('tfu-zoom-lock');
    inline.go(i, false);
    if (last && last.focus) last.focus();
  }
  root.querySelector('.tfu-usc-zoom').addEventListener('click', open);
  root.querySelector('.tfu-usc-track').addEventListener('click', function (e) {
    if (e.target.closest('.tfu-usc-slide')) open();
  });
  box.addEventListener('click', function (e) { if (e.target === box) close(); });
  document.addEventListener('keydown', function (e) {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    else if (modal && e.key === 'ArrowRight') modal.go(modal.cur() + 1);
    else if (modal && e.key === 'ArrowLeft') modal.go(modal.cur() - 1);
  });
})();
