const imgWrapper = document.querySelector('.img__wrapper');
let num = 1;

document.querySelector('#prevBtn').onclick = () => {
  document
    .querySelectorAll('img')
    .forEach((el) => (el.style.transition = 'all ease-out 0.7s'));
  if (num === 1) {
    num = imgWrapper.children.length;
  } else num--;
  moveTo();
};
document.querySelector('#nextBtn').onclick = () => {
  document
    .querySelectorAll('img')
    .forEach((el) => (el.style.transition = 'all ease-out 0.7s'));
  if (num === imgWrapper.children.length) {
    num = 1;
  } else num++;
  moveTo();
};

function moveTo() {
  document.querySelector('.colored').classList.remove('colored');
  document.querySelector('.prev').classList.remove('prev');
  document.querySelector('.next').classList.remove('next');
  document.querySelector('.active').classList.remove('active');
  document.querySelector(`.img${num}`).classList.add('active');
  document.querySelector(`.circle${num}`).classList.add('colored');
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
function navigateImg(e) {
  if (e.target.classList.contains('circle')) {
    const className = e.target.classList[1];
    num = Number(className[className.length - 1]);
    document
      .querySelectorAll('img')
      .forEach((el) => (el.style.transition = 'unset'));
    moveTo();
  } else {
    return;
  }
}
document.querySelector('.sliderCircle').onclick = navigateImg;
