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
  document.querySelector('.prev').classList.remove('prev');
  document.querySelector('.next').classList.remove('next');
  document.querySelector('.active').classList.remove('active');
  document.querySelector(`.img${num}`).classList.add('active');
  if (num === imgWrapper.children.length) {
    imgWrapper.firstElementChild.classList.add('next');
    document
      .querySelector('.active')
      .previousElementSibling.classList.add('prev');
  } else if (num === 1) {
    imgWrapper.lastElementChild.classList.add('prev');
    document.querySelector('.active').nextElementSibling.classList.add('next');
  } else {
    document.querySelector('.active').nextElementSibling.classList.add('next');
    document
      .querySelector('.active')
      .previousElementSibling.classList.add('prev');
  }
}
