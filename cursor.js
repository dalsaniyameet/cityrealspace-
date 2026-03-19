// ===== CUSTOM CURSOR =====
(function () {
  const dot  = document.createElement('div'); dot.className  = 'cursor-dot';
  const ring = document.createElement('div'); ring.className = 'cursor-ring';
  document.body.append(dot, ring);

  document.addEventListener('mousemove', e => {
    dot.style.left  = ring.style.left = e.clientX + 'px';
    dot.style.top   = ring.style.top  = e.clientY + 'px';
  });

  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, input, select, textarea, [onclick]'))
      document.body.classList.add('cursor-hover');
    else
      document.body.classList.remove('cursor-hover');
  });

  document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
  document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-click'));
})();
