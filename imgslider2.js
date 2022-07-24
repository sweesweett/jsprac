const imgWrapper = document.querySelector('.img__wrapper');
const visibleImg = document.querySelector('.img__visible');
const newWidth = document.querySelector('.img__visible').offsetWidth;
let num = 0;
let startX = 0;
moveX = 0;

function toNext() {
  if (num === imgWrapper.children.length - 1) {
    num = 0;
  } else {
    num++;
  }

  imgWrapper.style.transform = `translateX(-${num * newWidth}px)`;
}
function toPrev() {
  if (num === 0) {
    num = imgWrapper.children.length - 1;
  } else {
    num--;
  }

  imgWrapper.style.transform = `translateX(-${num * newWidth}px)`;
}

function onPointerDown(e) {
  startX = e.clientX + num * newWidth;
  console.log(startX);
  visibleImg.addEventListener('pointermove', onPointerMove);
  visibleImg.addEventListener('pointerup', onPointerUp);
  visibleImg.addEventListener('pointerleave', onPointerUp);
}
function onPointerMove(e) {
  moveX = e.clientX - startX;
  // console.log(moveX);
  imgWrapper.style.transform = `translateX(${moveX}px)`;
} // 왜안될까
function onPointerUp(e) {
  visibleImg.removeEventListener('pointermove', onPointerMove);
  visibleImg.removeEventListener('pointerup', onPointerUp);
  visibleImg.removeEventListener('pointerleave', onPointerUp);
  if (Math.abs(moveX) > (num + 0.5) * newWidth) {
    toNext();
  }
}

document.querySelector('#nextBtn').onclick = toNext;
document.querySelector('#prevBtn').onclick = toPrev;
visibleImg.addEventListener('pointerdown', onPointerDown);
