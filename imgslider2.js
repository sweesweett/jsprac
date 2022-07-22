const imgWrapper = document.querySelector('.img__wrapper');
// const visibleImg = document.querySelector('.img__visible');
const newWidth = document.querySelector('.img__visible').offsetWidth;
let num = 0;
let startX = 0,
  moveX = 0;
document.querySelector('#nextBtn').onclick = () => {
  if (num === imgWrapper.children.length - 1) {
    num = 0;
  } else {
    num++;
  }

  imgWrapper.style.transform = `translateX(-${num * newWidth}px)`;
};
document.querySelector('#prevBtn').onclick = () => {
  if (num === 0) {
    num = imgWrapper.children.length - 1;
  } else {
    num--;
  }

  imgWrapper.style.transform = `translateX(-${num * newWidth}px)`;
};
// visibleImg.addEventListener('pointerdown', onPointerDown);
// function onPointerDown(e) {
//   startX = e.clientX;

//   console.log(startX);
//   visibleImg.addEventListener('pointermove', onPointerMove);
// }
// function onPointerMove(e) {
//   moveX = e.clientX - startX;

//   console.log(moveX);
//   imgWrapper.style.transform = `rotate(${moveX}deg)`;
// } // 왜안될까
