const icons = document.querySelector('#toShowNotResult');
const resultMessage = document.querySelector('.result__message');
const btns = document.querySelector('.btns');
const restart = document.querySelector('.restart');
const initialization = document.querySelector('.initialization');
const userScore = document.querySelector('.user__score');
const computerScore = document.querySelector('.computer__score');
const iconsResult = document.querySelector('#realResult');
let isRotate = true;
let itsInterval = null;
const test = [
  'fa-solid fa-hand-scissors',
  'fa-solid fa-hand',
  'fa-solid fa-hand-back-fist',
];
window.onload = () => {
  toLocalStorage();
  startInterval();
};
//로컬스토리지 초기 설정
function toLocalStorage() {
  const userScore = document.querySelector('.user__score');
  const computerScore = document.querySelector('.computer__score');
  let localResult = JSON.parse(localStorage.getItem('result'));
  resultMessage.textContent = '가위 바위 보!';
  if (localResult === null) {
    userScore.textContent = `you:0`;
    computerScore.textContent = `computer:0`;

    return localStorage.setItem(
      'result',
      JSON.stringify({ computer: 0, user: 0 })
    );
  } else {
    userScore.textContent = `you:${localResult.user}`;
    computerScore.textContent = `computer:${localResult.computer}`;
  }
  return;
}

// 가위바위보 아이콘 돌아가게하기
function startInterval() {
  isRotate = true;
  iconsResult.style.display = 'none';
  icons.style.display = 'block';
  itsInterval = setInterval(() => {
    let xx = 0.2;
    test.forEach((el) => {
      setTimeout(() => (icons.className = el), xx * 1000);
      xx += 0.2;
    });
  }, 100);
}
//interval 정지
function stopInterval() {
  clearInterval(itsInterval);
  isRotate = false;
}
// 가위바위보 버튼 클릭했을 때 이벤트
btns.addEventListener('click', (e) => {
  const userResult = document.querySelector('#userResult');
  if (isRotate === false) {
    return;
  }
  if (test.includes(e.target.className) === false) {
    return;
  }
  stopInterval();
  icons.style.display = 'none';
  iconsResult.className = test[Math.floor(Math.random() * test.length)];
  iconsResult.style.display = 'block';
  userResult.className = e.target.className;

  if (e.target.className === iconsResult.className) {
    gameResult('tie');
  } else if (e.target.className === test[0]) {
    if (iconsResult.className === test[2]) {
      gameResult('lose');
    } else {
      gameResult('win');
    }
  } else if (e.target.className === test[1]) {
    if (iconsResult.className === test[0]) {
      gameResult('lose');
    } else {
      gameResult('win');
    }
  } else if (e.target.className === test[2]) {
    if (iconsResult.className === test[1]) {
      gameResult('lose');
    } else {
      gameResult('win');
    }
  }
});

//게임 결과값
function gameResult(result) {
  let localResult = JSON.parse(localStorage.getItem('result'));
  if (result === 'win') {
    resultMessage.textContent = '이겼어요!';
    localResult.user = localResult.user + 1;
    userScore.textContent = `you : ${localResult.user}`;
    localStorage.setItem('result', JSON.stringify(localResult));
    animateParticles({ total: 150 });
  } else if (result === 'tie') {
    resultMessage.textContent = '비겼어요!';
  } else {
    resultMessage.textContent = '졌어요...';
    localResult.computer = localResult.computer + 1;
    computerScore.textContent = `computer : ${localResult.computer}`;
    localStorage.setItem('result', JSON.stringify(localResult));
  }
}
initialization.addEventListener('click', () => {
  localStorage.setItem('result', JSON.stringify({ computer: 0, user: 0 }));
  userScore.textContent = 'you : 0';
  computerScore.textContent = 'computer : 0';
  resultMessage.textContent = ' 가위 바위 보!';
});
restart.addEventListener('click', () => {
  isRotate = true;
  startInterval();
});
//----------------------------------------------------------
const colorHTML = ['0', '3', '6', '9', 'C', 'F'];

const randomRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

class Particle {
  constructor({ x, y, rotation, color, xSize, ySize, duration }) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.color = color;
    this.xSize = xSize;
    this.ySize = ySize;
    this.duration = duration;
    this.children = document.createElement('div');
    this.parent = resultMessage;
  }

  set() {
    this.children.style.setProperty('--x', this.x + 'px');
    this.children.style.setProperty('--y', this.y + 'px');
    this.children.style.setProperty('--rotate', this.rotation + 'deg');
    this.children.style.setProperty('--color', '#' + this.color);
    this.children.style.setProperty('--xSize', this.xSize + 'px');
    this.children.style.setProperty('--ySize', this.ySize + 'px');
    this.children.style.setProperty('--duration', this.duration + 'ms');
    this.children.className = 'rect';
    this.parent.append(this.children);
  }

  animate() {
    this.set();

    const timer = setTimeout(() => {
      this.parent.removeChild(this.children);
      clearTimeout(timer);
    }, this.duration);
  }
}

function animateParticles({ total = 120 }) {
  for (let i = 0; i < total; i++) {
    const particle = new Particle({
      x: randomRange(-300, 300),
      y: randomRange(-300, 0),
      rotation: randomRange(-360, 360),
      color: `${colorHTML[randomRange(0, 6)]}${colorHTML[randomRange(0, 6)]}${
        colorHTML[randomRange(0, 6)]
      }`,
      xSize: randomRange(4, 7),
      ySize: randomRange(2, 10),
      duration: randomRange(500, 1000),
    });
    particle.animate();
  }
}
//---------------
