const imgWrapper = document.querySelector('.img__wrapper');
const newWidth = document.querySelector('.img__visible').offsetWidth;
let num = 1;
document.querySelector('#nextBtn').onclick = () => {
  // newWidth += newWidth;

  console.log(newWidth);
  imgWrapper.style.left = `-${num * newWidth}px`;
  if (num === imgWrapper.children.length - 1) {
    num = 0;
  } else {
    num++;
  }

  // boxParaRule.style.setProperty('border', newBorder);
};
document.querySelector('#prevBtn').onclick = () => {
  imgWrapper.style.left = `-${
    (imgWrapper.children.length - 1 - num) * newWidth
  }px`;
  if (num === 1) {
    num = imgWrapper.children.length - 1;
  } else num--;
};
