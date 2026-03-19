// ===== REAL ESTATE BACKGROUND ANIMATION =====
(function () {
  const canvas = document.createElement('canvas');
  canvas.id = 'bgCanvas';
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;';
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');
  let W, H, items = [];

  const ICONS = ['🏠','🏢','🔑','📍','🏡','🏬','💰','🏗️','🏛️','📐'];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function createItem(startFromTop) {
    return {
      x: rand(20, W - 20),
      y: startFromTop ? rand(-200, -20) : rand(-H, H),
      size: rand(20, 42),
      icon: ICONS[Math.floor(Math.random() * ICONS.length)],
      speedY: rand(0.6, 1.4),
      opacity: rand(0.12, 0.22),
    };
  }

  function init() {
    resize();
    items = [];
    const count = Math.max(18, Math.floor(W / 80));
    for (let i = 0; i < count; i++) items.push(createItem(false));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    items.forEach(item => {
      ctx.save();
      ctx.globalAlpha = item.opacity;
      ctx.font = item.size + 'px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(item.icon, item.x, item.y);
      ctx.restore();

      item.y += item.speedY;

      if (item.y > H + 60) {
        Object.assign(item, createItem(true));
      }
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); init(); });
  init();
  draw();
})();
