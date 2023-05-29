/* eslint-disable */
function initParallax() {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    effects: true,
  });

  const timeline = gsap.timeline({scrollTrigger: {
    scrub: true,
    trigger: '.header',
    start: 'top top',
    end: 'center',
    pin: '.header',
  }});

  timeline
    .to('.layer.layer--top-image img', {
      scale: 5,
    })
    .to('.layer.layer--top-image', {
      opacity: 0,
    })
    // })
    // .fromTo('.text', {opacity: 0, x: "-100vw"}, {
    //     scrollTrigger: {
    //       scrub: true,
    //       start: 'top top',
    //       end: 'bottom+=500',
    //     },
    //     opacity: 1,
    //     color: "red",
    //     x: 0
    //   })
    // .to('.layer.layer--video', {
    //   scrollTrigger: {
    //     scrub: 0.4,
    //     trigger: '.header',
    //     start: 'top top',
    //     end: 'bottom',
    //   },
    //   y: 200,
    // })



  const text = document.querySelectorAll('.layer.layer--glass1 span');
  // const smoke = document.querySelector('.layer.layer--glass2');
  // const arr = [];
  // let i = 0;
  // text.forEach((letter) => {
  //   arr.push(letter.textContent);
  // });
  // setInterval(() => {
  //   if (i < arr.length) {
  //     smoke.textContent = arr[i];
  //     i === arr.length - 1 ? i = 0 : i = i+1;
  //   }
  //   gsap.fromTo(smoke, {
  //     duration: 8,
  //     opacity: 1,
  //     filter: 'blur(8px)',
  //     x: 0,
  //     y: 0,
  //     rotation: 20,
  //     scale: 1,
  //   }, {
  //     duration: 30,
  //     opacity: 0,
  //     filter: 'blur(100px)',
  //     x: Math.floor(Math.random() * 2000),
  //     y: Math.floor(Math.random() * -2000),
  //     rotation: Math.floor(Math.random() * -1000),
  //     scale: 30,
  //   });
  // }, 10000);
}

export {initParallax};
