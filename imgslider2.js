const imgWrapper = document.querySelector('.img__wrapper');
const visibleImg = document.querySelector('.img__visible');
const newWidth = document.querySelector('.img__visible').offsetWidth;
let num = 0;
let startX = 0;
moveX = 0;
const imgs = [
  {
    img: './img/slider/haechi_01.png',
    title: '메롱해치1',
    content: '너무귀엽죠?이렇게 귀여운 캐릭터가있다니!',
  },
  {
    img: './img/slider/haechi_02.png',
    title: '메롱해치2',
    content: '이미지슬라이더 테스트중이에요!',
  },
  {
    img: './img/slider/haechi_03.png',
    title: '메롱해치3',
    content: '미는거 해볼려고 지금 이러고있어요!',
  },
  {
    img: './img/slider/haechi_04.png',
    title: '메롱해치4',
    content: '으하하하 생각보다 힘들당',
  },
];
for (let i = 0; i < imgs.length; i++) {
  makeImgCard(i);
}

function makeImgCard(num) {
  const newImgCard = document.createElement('div');
  newImgCard.className = 'card';
  newImgCard.style.backgroundImage = `url(${imgs[num].img})`;
  const title = document.createElement('div');
  title.className = 'title';
  title.textContent = imgs[num].title;
  const content = document.createElement('div');
  content.className = 'content';
  content.textContent = imgs[num].content;
  newImgCard.prepend(title, content);
  imgWrapper.append(newImgCard);
}
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
  } else if (Math.abs(moveX) < (num - 0.5) * newWidth) {
    toPrev();
  }
}

document.querySelector('#nextBtn').onclick = toNext;
document.querySelector('#prevBtn').onclick = toPrev;
visibleImg.addEventListener('pointerdown', onPointerDown);
