/* Mains des heros (Tango e-commerce, Tango DS, Venue) — animation GSAP au scroll.
   ─────────────────────────────────────────────────────────────────────────
   RÉGLAGES : seules ces 7 lignes sont à toucher. */
var HANDS = {
  play: 'top 60%',       // démarre quand le HAUT du visuel atteint 60 % de l'écran (plus petit = plus tard)
  reverse: 'bottom 80%', // en remontant, rembobine quand le BAS du visuel repasse à 80 % de l'écran
  wrist: 12,             // rotation de la paume et des doigts autour du poignet, en degrés (0 = aucune)
  speed: 1,              // vitesse globale (2 = deux fois plus rapide, 0.5 = deux fois plus lent)
  drop: 45,              // le téléphone / laptop reste visible et descend de ce nombre de px en attente
  open: 150,             // au reverse, les mains s'ouvrent et descendent de ce nombre de px (plus bas que le device)
  markers: false         // true = affiche les repères play/reverse sur la page pour régler
};
/* ───────────────────────────────────────────────────────────────────────── */

(function () {
  if (!window.gsap || !window.ScrollTrigger) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  gsap.registerPlugin(ScrollTrigger);

  // Le poignet = le haut des traits du bras (éléments hors paume, tracés sans remplissage).
  function wrist(hand) {
    var minY = Infinity, xs = [];
    Array.prototype.forEach.call(hand.children, function (el) {
      if (el.classList.contains('palm')) return;
      var b = el.getBBox();
      if (b.y < minY) minY = b.y;
      xs.push(b.x + b.width / 2);
    });
    if (!xs.length) { var b = hand.getBBox(); return (b.x + b.width / 2) + ' ' + (b.y + b.height * 0.65); }
    return (xs.reduce(function (a, v) { return a + v; }, 0) / xs.length) + ' ' + minY;
  }
  function fingerOrigin(i, el) {
    return (el.style.getPropertyValue('--px') || '50%') + ' ' + (el.style.getPropertyValue('--py') || '100%');
  }

  document.querySelectorAll('.tango-hands').forEach(function (hero) {
    var svg = hero.querySelector('svg');
    var laptop = hero.classList.contains('tfu-hero');
    var device = laptop ? hero.querySelector(':scope > img') : svg.querySelector('.hp-phone');
    var tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });
    var parts = [];   // mains déjà animées une fois : on les ouvre / referme ensuite sans les faire disparaître
    var played = false;
    var typing = gsap.timeline({ paused: true });

    // 1. Le téléphone / laptop reste visible : légèrement plus bas en attente, il remonte au déclenchement
    gsap.set(device, { y: HANDS.drop });

    // 2. Chaque main monte (bras compris), la paume et les doigts pivotent autour du poignet
    ['hand-l', 'hand-r'].forEach(function (side, n) {
      var hand = svg.querySelector('.hand.' + side + ':not(.hp-thumb)');
      if (!hand) return;
      var thumb = svg.querySelector('.hand.' + side + '.hp-thumb');
      var palm = hand.querySelector('.palm');
      var thumbPalm = thumb && thumb.querySelector('.palm');
      var at = (laptop ? 0.9 : 0.45) + n * 0.4;
      var dir = side === 'hand-l' ? -1 : 1;
      var origin = wrist(hand);
      tl.from(thumb ? [hand, thumb] : hand, { y: 90, autoAlpha: 0, duration: 1.2 }, at);
      tl.from(thumbPalm ? [palm, thumbPalm] : palm, { rotation: dir * HANDS.wrist, svgOrigin: origin, duration: 1.5, ease: 'power2.out' }, at);

      var fingers = hand.querySelectorAll('.f');
      parts.push({ group: thumb ? [hand, thumb] : hand, palms: thumbPalm ? [palm, thumbPalm] : palm, fingers: fingers, dir: dir, origin: origin });
      if (laptop) {
        // 3a. Laptop : les doigts tapent quelques fois sur le clavier (à l'aller seulement, jamais au reverse)
        fingers.forEach(function (f, i) {
          typing.to(f, { y: 3.5, rotation: 1.5, transformOrigin: '50% 100%', duration: 0.11, ease: 'power1.inOut', yoyo: true, repeat: 5, repeatDelay: 0.18 + (i % 3) * 0.09 },
            at + 1.3 + ((i * 0.23) % 0.6));
        });
      } else {
        // 3b. Téléphone : les doigts (hors pouce) se referment depuis leur base
        tl.from(fingers, { rotation: dir * 26, transformOrigin: fingerOrigin, duration: 1.3, ease: 'expo.out', stagger: 0.05 }, at + 0.75);
      }
    });

    var s = HANDS.speed;
    // Reverse : les mains restent visibles, s'ouvrent et descendent plus bas que le device
    // px écran → unités SVG (les mains vivent dans le repère du SVG)
    var px = function (v) { var vb = svg.viewBox && svg.viewBox.baseVal, w = svg.getBoundingClientRect().width; return vb && vb.width && w ? v * vb.width / w : v; };
    var release = function () {
      parts.forEach(function (p) {
        gsap.to(p.group, { y: px(HANDS.open), duration: 0.9 / s, ease: 'power2.inOut', overwrite: 'auto' });
        gsap.to(p.palms, { rotation: p.dir * HANDS.wrist, svgOrigin: p.origin, duration: 0.7 / s, ease: 'power2.out', overwrite: 'auto' });
        if (!laptop) gsap.to(p.fingers, { rotation: p.dir * 26, transformOrigin: fingerOrigin, duration: 0.6 / s, ease: 'power2.out', overwrite: 'auto' });
      });
    };
    // Retour : les mains remontent et se referment sur le device
    var grab = function () {
      parts.forEach(function (p, n) {
        var at = (laptop ? 0.3 : 0.15) + n * 0.25;
        gsap.to(p.group, { y: 0, duration: 1.1 / s, delay: at / s, ease: 'power3.out', overwrite: 'auto' });
        gsap.to(p.palms, { rotation: 0, svgOrigin: p.origin, duration: 1.3 / s, delay: at / s, ease: 'power2.out', overwrite: 'auto' });
        if (!laptop) gsap.to(p.fingers, { rotation: 0, transformOrigin: fingerOrigin, duration: 1.2 / s, delay: (at + 0.6) / s, ease: 'expo.out', stagger: 0.05, overwrite: 'auto' });
      });
    };
    var play = function () {
      gsap.to(device, { y: 0, duration: 1 / s, ease: 'power3.out', overwrite: true });
      if (!played) { played = true; tl.timeScale(s).play(); }
      else { tl.progress(1); grab(); }
      typing.timeScale(s).restart(true);
    };
    var rewind = function () {
      if (!played) return;
      gsap.to(device, { y: HANDS.drop, duration: 0.8 / s, ease: 'power2.out', overwrite: true });
      typing.pause(0);
      tl.progress(1);
      release();
    };
    var target = laptop ? hero : device;
    ScrollTrigger.create({ trigger: target, start: HANDS.play, markers: HANDS.markers, onEnter: play, onLeaveBack: rewind });
    ScrollTrigger.create({ trigger: target, start: HANDS.reverse, markers: HANDS.markers, onLeaveBack: rewind });
  });
})();
