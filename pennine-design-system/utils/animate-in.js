export default function initScrollAnimations() {
  const elements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;

          // Apply optional delay
          const delay = el.dataset.delay;
          if (delay) {
            el.style.transitionDelay = `${delay}ms`;
          }

          el.classList.add("is-visible");

          // Animate once
          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  elements.forEach((el) => observer.observe(el));
}
