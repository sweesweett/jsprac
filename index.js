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
