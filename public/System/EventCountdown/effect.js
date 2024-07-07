(function(global) {
  global.effectInit = function(canvas) {
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 100;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.radius = Math.random() * 2 + 1;
        this.color = `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, 0.7)`;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }
    }

    function drawConnections() {
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(100, 200, 255, ${1 - distance / 100})`;
            ctx.stroke();
          }
        });
      });
    }

    function clearBackground(el) {
      const oldCanvas = el.querySelector('canvas');
      console.error("receive el and clear in effect.js");
      if (oldCanvas && !oldCanvas.transferControlToOffscreen) {
        const ctx = oldCanvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, oldCanvas.width, oldCanvas.height);
        }
      }
    }

    resizeCanvas();
    clearBackground(canvas);

    window.addEventListener('resize', resizeCanvas);

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    return {
      update: function() {
        ctx.fillStyle = 'rgba(0,0,0,0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
          p.update();
          p.draw();
        });

        drawConnections();
      }
    };
  };
})(typeof self !== "undefined" ? self : this);
