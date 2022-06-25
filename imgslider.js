const imgWrapper = document.querySelector('.img__wrapper');
console.log(imgWrapper.children);
let num = 1;
function plusMinus() {
  document.querySelector('#prevBtn').onclick = () => {
    if (num === 1) {
      num = imgWrapper.children.length;
    } else num--;
    moveTo();
    console.log(num);
  };
  document.querySelector('#nextBtn').onclick = () => {
    if (num === imgWrapper.children.length) {
      num = 1;
    } else num++;
    moveTo();

    console.log(num);
  };
}
plusMinus();
function moveTo() {
  document.querySelector('.active').classList.remove('active');
  document.querySelector(`.img${num}`).classList.add('active');
}
