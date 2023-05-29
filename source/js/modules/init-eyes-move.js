// const anchor = document.querySelector('.box');
// const eye = document.querySelector('.box img');
// const rekt = anchor.getBoundingClientRect();
// const anchorX = rekt.left + rekt.width / 2;
// const anchorY = rekt.top + rekt.height / 2;

// document.addEventListener('mousemove', (e) => {
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;

//   const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
//   eye.style.transform = `translate(${-1 * (anchorX - mouseX) / 5}px, ${-1 * (anchorY - mouseY) / 30}px) skew(${(anchorX - mouseX) / 100}deg, ${(anchorY - mouseY) / 100}deg)`;
// });

// function angle(cx, cy, ex, ey) {
//   const dy = ey - cy;
//   const dx = ex - cx;
//   const rad = Math.atan2(dy, dx);
//   const deg = rad * 180 / Math.PI;

//   return deg;
// }
