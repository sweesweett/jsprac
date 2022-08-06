const previewUl = document.querySelector('.preview__ul');
const pracList = document.querySelector('.prac__list');
const toggle = document.querySelector('.toggle');
const title = document.querySelector('.title');
// setTimeout(() => {
//   title.style.backgroundSize = '100% 100%';
//   setTimeout(() => {
//     title.style.backgroundImage = 'linear-gradient(0deg,#0091ca,#0091ca)';
//   }, 700);
// }, 200);
const colors = [
  '#ef5350',
  '#ec407a',
  '#ab47bc',
  '#7e57c2',
  '#42a5f5',
  '#26c6da',
  '#d4e157',
  '#ffee58',
  '#ff7043',
];
document.addEventListener('click', (e) => {
  let x = e.clientX;
  let y = e.clientY;
  for (let i = 0; i < 5; i++) {
    randomCircle(x, y);
  }
});
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function randomCircle(x, y) {
  const circle = document.createElement('div');
  let width = randomRange(10, 70);
  circle.className = 'circle';
  circle.style.setProperty('--width', `${width}px`);
  circle.style.setProperty('--x', `${x - width + randomRange(-30, 30)}px`);
  circle.style.setProperty('--y', `${y - width + randomRange(-30, 30)}px`);
  circle.style.setProperty('--duration', `${randomRange(5, 10) * 100}ms`);
  circle.style.setProperty(
    '--color1',
    `${colors[Math.floor(Math.random() * colors.length)]}2b`
  );
  document.body.append(circle);
  setTimeout(() => document.body.removeChild(circle), 1000);
}
previewUl.addEventListener('click', () => {
  pracList.style.display = 'block';
  toggle.style.transform = 'rotate(180deg)';
  toggle.style.top = 'calc(50% - 12px)';
  let time = 0;
  for (let el of pracList.children) {
    setTimeout(() => {
      el.style.height = '70px';
      el.style.opacity = '1';
    }, time);
    time += 100;
  }
});
pracList.addEventListener('mouseleave', () => {
  toggle.style.transform = 'translateY(-50%) rotate(0deg)';
  toggle.style.top = '50%';
  let time = 0;
  for (let i = pracList.children.length - 1; i >= 0; i--) {
    setTimeout(() => {
      pracList.children[i].style.height = '0';
      pracList.children[i].style.opacity = '0';
    }, time);
    time += 100;
  }
  setTimeout(() => {
    pracList.style.display = 'none';
  }, 500);

  //
});
// 왜 mouseout 안쓰냐? -> 자식요소에도 적용이 돼서, hover한것과 다름이 없다
