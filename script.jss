(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var screen = document.getElementById('env-screen');
  var env = document.getElementById('envelope');
  var site = document.getElementById('site');
  var opened = false;

  function observe() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }

  env.addEventListener('click', function () {
    if (opened) return;
    opened = true;
    screen.classList.add('opened');
    var t = reduce ? 100 : 1; // timing scale
    setTimeout(function () { screen.classList.add('gone'); }, reduce ? 300 : 3400);
    setTimeout(function () {
      site.classList.add('show');
      site.removeAttribute('aria-hidden');
      document.body.classList.remove('locked');
      window.scrollTo(0, 0);
      observe();
    }, reduce ? 400 : 3900);
  });

  document.getElementById('openFinal').addEventListener('click', function () {
    var pre = document.getElementById('pre');
    var msg = document.getElementById('msg');
    pre.classList.add('out');
    setTimeout(function () {
      pre.hidden = true;
      msg.hidden = false;
      msg.classList.add('in');
    }, reduce ? 50 : 800);
  });
})();
