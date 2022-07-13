const frame = document.querySelector('.frame');
const imgs = [
  './img/slider/haechi_01.png',
  './img/slider/haechi_02.png',
  './img/slider/haechi_03.png',
  './img/slider/haechi_04.png',
];
let cardCount = 0;
for (let i = 0; i < imgs.length; i++) {
  appendCard();
}
function appendCard() {
  const newCard = document.createElement('div');
  newCard.className = 'card';
  newCard.style.backgroundImage = `url(${imgs[cardCount++ % imgs.length]})`;
  frame.append(newCard); //아 맨 뒤인 애가 앞에오는 이유가 html은 늦게 입력된애를 맨위로 올리지....
}
