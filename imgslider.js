const imgWrapper = document.querySelector('.img__wrapper');
console.log(imgWrapper.children);
let num = 1;

document.querySelector('#prevBtn').onclick = () => {
  if (num === 1) {
    num = imgWrapper.children.length;
  } else num--;
  moveTo();
};
document.querySelector('#nextBtn').onclick = () => {
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
    moveTo();
  } else {
    return;
  }
}
document.querySelector('.sliderCircle').onclick = navigateImg;
