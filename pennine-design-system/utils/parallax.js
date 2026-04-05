export function initParallax(selector = "[data-parallax]", strength = 20) {
  const elements = document.querySelectorAll(selector);

  function update() {
    const scrollY = window.scrollY;

    elements.forEach((el) => {
      const speed = el.dataset.parallaxSpeed || 1;
      const offset = (scrollY * speed) / strength;
      el.style.transform = `translateY(${offset}px)`;
    });

    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}
