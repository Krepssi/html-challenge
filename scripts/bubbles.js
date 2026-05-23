const canvas = document.querySelector('.bubbles');
const ctx = canvas.getContext('2d');
let W, H, mouse = {x: -999, y: -999}, bubbles = [];

const COLORS = [
  {r:183,g:143,b:240},{r:93,g:202,b:165},{r:216,g:90,b:48},{r:55,g:138,b:221},
  {r:212,g:83,b:126},{r:239,g:159,b:39},{r:99,g:153,b:34},{r:224,g:75,b:74}
];

function resize() {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * devicePixelRatio;
  canvas.height = rect.height * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
  W = rect.width; H = rect.height;
}

function makeBubble(i) {
  const c = COLORS[i % COLORS.length];
  const r = 22 + Math.random() * 28;
  return {
    ox: r + Math.random() * (W - 2*r),
    oy: r + Math.random() * (H - 2*r),
    x: 0, y: 0,
    r,
    c,
    vx: 0, vy: 0,
    wobble: Math.random() * Math.PI * 2,
    wobbleSpeed: 0.03 + Math.random() * 0.02
  };
}

function init() {
  resize();
  bubbles = Array.from({length: 22}, (_, i) => {
    const b = makeBubble(i);
    b.x = b.ox; b.y = b.oy;
    return b;
  });
}

canvas.addEventListener('mousemove', e => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});
canvas.addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999; });
canvas.addEventListener('touchmove', e => {
  e.preventDefault();
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.touches[0].clientX - rect.left;
  mouse.y = e.touches[0].clientY - rect.top;
}, {passive: false});

function drawBubble(b) {
  const {r, c} = b;
  b.wobble += b.wobbleSpeed;
  const px = b.x + Math.sin(b.wobble) * 1.2;
  const py = b.y + Math.cos(b.wobble * 0.7) * 1.2;

  ctx.save();
  ctx.beginPath();
  ctx.arc(px, py, r, 0, Math.PI * 2);

  const alpha = 0.22;
  ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${alpha})`;
  ctx.fill();

  ctx.lineWidth = 0.05;
  ctx.strokeStyle = `rgba(${c.r},${c.g},${c.b},0.7)`;
  ctx.stroke();

  const gx = px - r * 0.3, gy = py - r * 0.35;
  const grad = ctx.createRadialGradient(gx, gy, r*0.05, gx, gy, r*0.6);
  grad.addColorStop(0, `rgba(255,255,255,0.55)`);
  grad.addColorStop(1, `rgba(255,255,255,0)`);
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, W, H);

  for (const b of bubbles) {
    const dx = mouse.x - b.x;
    const dy = mouse.y - b.y;
    const dist = Math.sqrt(dx*dx + dy*dy) || 1;
    const pull = 180;
    const strength = Math.min(1, pull / (dist + 40));

    const tx = mouse.x !== -999 ? b.ox + dx * strength * 0.85 : b.ox;
    const ty = mouse.y !== -999 ? b.oy + dy * strength * 0.85 : b.oy;

    b.x += (tx - b.x) * 0.07;
    b.y += (ty - b.y) * 0.07;

    drawBubble(b);
  }

  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => { resize(); });
init();
animate();