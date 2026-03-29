
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));

  document.querySelectorAll('.horario-card, .clase-card, .plan-card').forEach((card, i) => {
    card.style.transitionDelay = `${(i % 4) * 0.08}s`;
  });

  //GSAP
gsap.registerPlugin(ScrollTrigger);
// animación del footer
gsap.from("footer", {
  scrollTrigger: {
    trigger: "footer",    // El elemento que dispara la animación
    start: "top bottom",  // Empieza cuando el tope del footer toca el fondo de la pantalla
    toggleActions: "play none none none" 
  },
  y: 100,                 // Empieza 100px abajo
  opacity: 0,             // Empieza invisible
  duration: 2.5,          // Tiempo que dura el rebote
  ease: "bounce.out"      // ESTA es la clave del efecto "Footer Bounce"
});
