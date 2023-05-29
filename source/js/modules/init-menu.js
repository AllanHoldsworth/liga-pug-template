/* eslint-disable */
function initMenu() {
  const menuSrc = {
    black: 'img/content/bg-2.jpg',
    purple: 'img/content/bg-1.jpg',
    red: 'img/content/bg-3.jpg',
    green: 'img/content/bg-4.jpg',
    orange: 'img/content/bg-5.jpg',
  };
  const menuItems = document.querySelectorAll('.menu__item');
  let previouseTarget = document.querySelector('[data-menu="purple"]');
  const menuTimeline = gsap.timeline();

  let menuTimeout;
  menuItems.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
      if (previouseTarget === e.target) {
        console.log('same', previouseTarget, e.target)
        return;
      } else {
        console.log('timeoutset', previouseTarget, e.target)
        menuTimeout = setTimeout(() => {
          previouseTarget = e.target;
          if (!menuTimeline.isActive()) {
            menuTimeline
            .fromTo('.menu__glass', {width: "37.5rem", height: "37.5rem"}, {width: "100vw", height: "100vh", borderRadius: "0", duration:0.5})
            .fromTo('.menu__image', {opacity: 1, duration: 0.5}, {opacity: 0, duration: 0.5})
            .set('.menu__image', {attr: {src: menuSrc[e.target.dataset.menu]}})
            .to('.menu__glass', {width: "37.5rem", height: "37.5rem", borderRadius: "50%", duration:0.5})
            .to('.menu__image', {opacity: 1, duration: 0.5}, "<")
          }
        }, 500);
      }
    });
    item.addEventListener('mouseleave', () => clearTimeout(menuTimeout));
  });
}

export {initMenu};
