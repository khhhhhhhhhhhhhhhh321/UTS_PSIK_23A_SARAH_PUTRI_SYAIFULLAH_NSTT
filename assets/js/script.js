document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  const navbar = document.querySelector('.navbar');
  const navbarHeight = navbar.offsetHeight;
  const navbarBottom = navbar.getBoundingClientRect().bottom;

  sections.forEach(function (section) {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;

    if (sectionTop < navbarBottom) {
      const opacity = Math.max(1 - (navbarBottom - sectionTop) / 300, 0);
      const transform = Math.min((navbarBottom - sectionTop) / 50, 20);
      section.style.opacity = opacity;
      section.style.transform = `translateY(${transform}px)`;
    } else {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});




function startAnimation() {
  const elements = document.querySelectorAll('.text-animation');
  const animationDuration = 5000;
  let currentIndex = 0;

  function animateElement() {
    elements.forEach((el) => {
      el.style.opacity = 0;
      el.classList.remove('animate-cycle');
    });

    elements[currentIndex].classList.add('animate-cycle');
    elements[currentIndex].style.animationDelay = '0s';

    currentIndex = (currentIndex + 1) % elements.length;

    if (currentIndex === 0) {
      setTimeout(animateElement, 2000);
    } else {
      setTimeout(animateElement, 1000);
    }
  }

  animateElement();
}

window.onload = startAnimation;
