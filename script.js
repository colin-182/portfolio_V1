(function () {
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function sync() { btn.setAttribute('aria-checked', root.dataset.theme === 'dark' ? 'true' : 'false'); }
  sync();

  function setTheme(next, x, y) {
    function apply() {
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
      sync();
    }
    if (!document.startViewTransition || reduce) { apply(); return; }
    var radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    var t = document.startViewTransition(apply);
    t.ready.then(function () {
      root.animate(
        { clipPath: ['circle(0px at ' + x + 'px ' + y + 'px)', 'circle(' + radius + 'px at ' + x + 'px ' + y + 'px)'] },
        { duration: 650, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }
      );
    });
  }

  btn.addEventListener('click', function () {
    var r = btn.getBoundingClientRect();
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', r.left + r.width / 2, r.top + r.height / 2);
  });
})();