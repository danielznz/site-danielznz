const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);


window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  document.querySelectorAll('.blur-orb').forEach((orb, i) => {
    const speed = i === 0 ? 0.3 : 0.2;
    orb.style.transform = `translateY(${scrollY * speed}px)`;
  });
});

