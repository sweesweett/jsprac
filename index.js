const previewUl = document.querySelector('.preview__ul');
const pracList = document.querySelector('.prac__list');
const toggle = document.querySelector('.toggle');
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
  pracList.style.display = 'none';
  toggle.style.transform = 'translateY(-50%) rotate(0deg)';
  toggle.style.top = '50%';
  let time = 0;
  for (let el of pracList.children) {
    setTimeout(() => {
      el.style.height = '0';
      el.style.opacity = '0';
    }, time + 600);
  }
});
// 왜 mouseout 안쓰냐? -> 자식요소에도 적용이 돼서, hover한것과 다름이 없다
