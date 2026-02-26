document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // ═══════════════════════════════════════════════════════
  // DS ANIMATION 1: Masked Text Reveal (Hero H1)
  // y:100%→0%, skewY:7→0, 1.5s, stagger 0.15s, power4.out
  // ═══════════════════════════════════════════════════════
  const textElements = document.querySelectorAll(".reveal-text");
  gsap.fromTo(textElements,
    { y: "100%", skewY: 7 },
    {
      y: "0%",
      skewY: 0,
      duration: 1.5,
      stagger: 0.15,
      ease: "power4.out",
      delay: 0.2
    }
  );

  // ═══════════════════════════════════════════════════════
  // DS ANIMATION 2: Paragraph Fade In
  // opacity:0→1, 1s, stagger 0.2s, delay 1s, power2.out
  // ═══════════════════════════════════════════════════════
  gsap.to(".reveal-para", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    delay: 1,
    ease: "power2.out"
  });

  // ═══════════════════════════════════════════════════════
  // DS ANIMATION 3: Parallax Image (hero card)
  // Subtle parallax within bounds — image is 130% height
  // so 10% movement stays safely inside container
  // ═══════════════════════════════════════════════════════
  gsap.to(".hero-card-img", {
    yPercent: 8,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-card-img",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

  // ═══════════════════════════════════════════════════════
  // DS ANIMATION 4: Scroll Reveal Cards
  // opacity:0→1, y:50→0, 1s, power3.out, start:top 85%
  // ═══════════════════════════════════════════════════════
  document.querySelectorAll(".group").forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%"
        }
      }
    );
  });

  // ═══════════════════════════════════════════════════════
  // TIMELINE SECTION ANIMATIONS
  // ═══════════════════════════════════════════════════════

  // 5A: Timeline H2 — Masked Text Reveal on scroll
  const tlTextElements = document.querySelectorAll(".tl-reveal-text");
  if (tlTextElements.length) {
    gsap.fromTo(tlTextElements,
      { y: "100%", skewY: 5 },
      {
        y: "0%",
        skewY: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#trajetoria",
          start: "top 75%"
        }
      }
    );
  }

  // 5B: Timeline generic reveals (labels, paragraphs, CTA)
  document.querySelectorAll(".tl-reveal").forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%"
        }
      }
    );
  });

  // 5C: Timeline Items — alternating left/right slide-in
  document.querySelectorAll(".tl-item").forEach((item, index) => {
    const isLeft = index % 2 === 0;
    gsap.fromTo(item,
      { opacity: 0, x: isLeft ? -60 : 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%"
        }
      }
    );
  });

  // ═══════════════════════════════════════════════════════
  // TRATAMENTOS SECTION ANIMATIONS
  // ═══════════════════════════════════════════════════════

  // 6A: Counter Number Animation — scroll-triggered increment
  document.querySelectorAll(".counter-num").forEach((el) => {
    const target = parseInt(el.dataset.target);
    gsap.fromTo(el, { innerText: 0 }, {
      innerText: target,
      duration: 2,
      ease: "power2.out",
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: el,
        start: "top 85%"
      },
      onUpdate: function() {
        const val = Math.round(gsap.getProperty(el, "innerText"));
        el.textContent = val.toLocaleString('pt-BR');
      }
    });
  });

  // 6B: Stats fade-in with stagger
  gsap.fromTo(".svc-stat",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#tratamentos",
        start: "top 70%"
      }
    }
  );

  // 6C: Section H2 — Masked Text Reveal
  const svcTextElements = document.querySelectorAll(".svc-reveal-text");
  if (svcTextElements.length) {
    gsap.fromTo(svcTextElements,
      { y: "100%", skewY: 5 },
      {
        y: "0%",
        skewY: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".svc-reveal-text",
          start: "top 80%"
        }
      }
    );
  }

  // 6D: Generic reveals (labels, paragraphs, sidebar)
  document.querySelectorAll(".svc-reveal").forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%"
        }
      }
    );
  });

  // 6E: Service Cards — staggered entrance from bottom
  const svcCards = document.querySelectorAll(".svc-card");
  svcCards.forEach((card, i) => {
    gsap.fromTo(card,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%"
        }
      }
    );
  });

  // ═══════════════════════════════════════════════════════
  // FOOTER ANIMATIONS
  // ═══════════════════════════════════════════════════════

  // 7A: Footer columns — staggered fade-in
  gsap.fromTo(".ft-reveal",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 85%"
      }
    }
  );

  // Floating tooth outlines, subtle and elegant
  // ═══════════════════════════════════════════════════════
  const canvas = document.getElementById('dental-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    function resizeCanvas() {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    }

    // Tooth shape path (simplified elegant outline)
    function drawTooth(ctx, x, y, size, rotation, opacity) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.scale(size, size);
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = '#929AAB';
      ctx.lineWidth = 1.5 / size;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.beginPath();
      // Crown
      ctx.moveTo(-8, 0);
      ctx.bezierCurveTo(-10, -12, -6, -20, 0, -20);
      ctx.bezierCurveTo(6, -20, 10, -12, 8, 0);
      // Roots
      ctx.bezierCurveTo(8, 6, 6, 14, 5, 18);
      ctx.bezierCurveTo(4, 20, 2, 18, 1, 10);
      ctx.bezierCurveTo(0, 18, -2, 20, -3, 18);
      ctx.bezierCurveTo(-5, 14, -8, 6, -8, 0);
      ctx.stroke();
      ctx.restore();
    }

    // Cross / plus shape
    function drawCross(ctx, x, y, size, rotation, opacity) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = '#929AAB';
      ctx.lineWidth = 1.2;
      ctx.lineCap = 'round';

      const s = size * 4;
      ctx.beginPath();
      ctx.moveTo(-s, 0);
      ctx.lineTo(s, 0);
      ctx.moveTo(0, -s);
      ctx.lineTo(0, s);
      ctx.stroke();
      ctx.restore();
    }

    // Diamond dot
    function drawDiamond(ctx, x, y, size, rotation, opacity) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation + Math.PI / 4);
      ctx.globalAlpha = opacity;
      ctx.fillStyle = '#929AAB';

      const s = size * 2.5;
      ctx.fillRect(-s/2, -s/2, s, s);
      ctx.restore();
    }

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 0.6 + 0.3;
        this.speedY = -(Math.random() * 0.3 + 0.1);
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.005;
        this.opacity = Math.random() * 0.15 + 0.03;
        this.maxOpacity = this.opacity;
        this.type = Math.random() < 0.55 ? 'tooth' : (Math.random() < 0.5 ? 'cross' : 'diamond');
        this.fadePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        this.fadePhase += 0.008;
        this.opacity = this.maxOpacity * (0.5 + 0.5 * Math.sin(this.fadePhase));

        if (this.y < -60 || this.x < -60 || this.x > canvas.width + 60) {
          this.reset();
          this.y = canvas.height + 40;
        }
      }

      draw(ctx) {
        if (this.type === 'tooth') {
          drawTooth(ctx, this.x, this.y, this.size, this.rotation, this.opacity);
        } else if (this.type === 'cross') {
          drawCross(ctx, this.x, this.y, this.size, this.rotation, this.opacity);
        } else {
          drawDiamond(ctx, this.x, this.y, this.size, this.rotation, this.opacity);
        }
      }
    }

    function initParticles() {
      particles = [];
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 50);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });
      animationId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
  }

  // ═══════════════════════════════════════════════════════
  // MOBILE MENU
  // ═══════════════════════════════════════════════════════
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      gsap.fromTo(mobileMenu,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    });
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }
});

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    gsap.to(mobileMenu, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      }
    });
  }
}

window.addEventListener('load', () => {
  if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
});