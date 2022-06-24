const imgWrapper = document.querySelector('.img__wrapper');
console.log(imgWrapper.children);
let num = 1;
function plusMinus() {
  document.querySelector('#prevBtn').onclick = () => {
    if (num === 0) {
      num = imgWrapper.children.length;
    } else num--;
    console.log(num);
  };
  document.querySelector('#nextBtn').onclick = () => {
    if (num === imgWrapper.children.length) {
      num = 1;
    } else num++;
    console.log(num);
  };
}
plusMinus();
