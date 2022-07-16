const frame = document.querySelector('.frame');
const imgs = [
  './img/slider/haechi_01.png',
  './img/slider/haechi_02.png',
  './img/slider/haechi_03.png',
  './img/slider/haechi_04.png',
];
let cardCount = 0;
for (let i = 0; i < imgs.length; i++) {
  prependCard();
}
let startX = 0, //마우스가 터치를 시작한 위치 x
  startY = 0, // 마우스가 터치를 시작한 위치 y
  moveX = 0,
  moveY = 0;
const firstCard = document.querySelector('.card:last-child');
const secondCard = document.querySelector('.card:nth-last-child(2)');
const thirdCard = document.querySelector('.card:nth-last-child(3)');
addEventListener(firstCard);
function prependCard() {
  const newCard = document.createElement('div');
  newCard.className = 'card';
  newCard.style.backgroundImage = `url(${imgs[cardCount++ % imgs.length]})`;
  frame.prepend(newCard); //아 맨 뒤인 애가 앞에오는 이유가 html은 늦게 입력된애를 맨위로 올리지....
}

function addEventListener(card) {
  card.addEventListener('pointerdown', onPointerDown);
}
function onPointerDown(e) {
  startX = e.clientX;
  startY = e.clientY;
  console.log(startX, startY);
  firstCard.addEventListener('pointermove', onPointerMove);
  firstCard.addEventListener('pointerup', onPointerUp);
  firstCard.addEventListener('pointerleave', onPointerUp);
}
function onPointerMove(e) {
  moveX = e.clientX - startX;
  moveY = e.clientY - startY;
  firstCard.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotate(${-10}deg)`;
  console.log(moveX, moveY);
}
function onPointerUp(e) {
  firstCard.removeEventListener('pointermove', onPointerMove);
  firstCard.removeEventListener('pointerup', onPointerUp);
  firstCard.removeEventListener('pointerleave', onPointerUp);

  if (Math.abs(moveX) > frame.clientWidth / 2) {
    firstCard.removeEventListener('pointerdown', onPointerDown);
  } else {
    firstCard.style.transform = `translate3d(0px, 0px, 0)`;
  }
}
