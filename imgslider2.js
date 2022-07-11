const imgWrapper = document.querySelector('.img__wrapper');
const newWidth = document.querySelector('.img__visible').offsetWidth;
let num = 0;
document.querySelector('#nextBtn').onclick = () => {
  if (num === imgWrapper.children.length - 1) {
    num = 0;
  } else {
    num++;
  }
  imgWrapper.style.left = `-${num * newWidth}px`;
};
document.querySelector('#prevBtn').onclick = () => {
  if (num === 0) {
    num = imgWrapper.children.length;
  }
  num--;

  imgWrapper.style.left = `-${num * newWidth}px`;
};
