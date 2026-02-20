document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for fade-up animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

  // Mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
    // Close menu on link click
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Navbar scroll effect
  const nav = document.getElementById('nav');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > 100) {
      nav.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
      nav.style.background = 'rgba(10, 10, 15, 0.85)';
    }
    lastScroll = current;
  });

  // Particles background
  const canvas = document.getElementById('particles');
  if (!canvas) return;

  const ctx = (() => {
    const c = document.createElement('canvas');
    c.style.cssText = 'position:absolute;inset:0;width:100%;height:100%';
    canvas.appendChild(c);
    return c.getContext('2d');
  })();

  const resize = () => {
    ctx.canvas.width = canvas.offsetWidth;
    ctx.canvas.height = canvas.offsetHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.offsetWidth,
    y: Math.random() * canvas.offsetHeight,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    r: Math.random() * 1.5 + 0.5,
  }));

  const animate = () => {
    const w = ctx.canvas.width;
    const h = ctx.canvas.height;
    ctx.clearRect(0, 0, w, h);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(108, 99, 255, 0.4)';
      ctx.fill();
    });

    // Draw lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(108, 99, 255, ${0.1 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  };
  animate();
});
