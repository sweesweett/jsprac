let isRotate = false;
const test = [
  'fa-solid fa-hand-scissors',
  'fa-solid fa-hand',
  'fa-solid fa-hand-back-fist',
];
const testdom = document.querySelector('.test_1');
const testdom2 = document.querySelector('.test_2');
const btn = document.querySelector('.test');
const btn2 = document.querySelector('.test2');
// btn.onclick = () => {

//   console.log('test중인데 망한것같아');
//   testdom.className = test[i];
//   i++;
// };

const itsInterval = setInterval(() => {
  let xx = 0.1;
  for (let el of test) {
    setTimeout(() => (testdom.className = el), xx * 1000);
    xx += 0.1;
  }
}, 100);
btn2.onclick = (e) => {
  clearInterval(itsInterval);
  testdom.style.display = 'none';
  testdom2.className = test[Math.floor(Math.random() * test.length)];
  testdom2.style.display = 'block';
};
itsInterval;
