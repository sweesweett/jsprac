toLocalStorage();
const icons = document.querySelector('#toShowNotResult');
const resultMessage = document.querySelector('.result__message');
const btns = document.querySelector('.btns');
const restart = document.querySelector('.restart');
let isRotate = true;
const test = [
  'fa-solid fa-hand-scissors',
  'fa-solid fa-hand',
  'fa-solid fa-hand-back-fist',
];
let interval = itsInterval;

//로컬스토리지 초기 설정
function toLocalStorage() {
  const userScore = document.querySelector('.user__score');
  const computerScore = document.querySelector('.computer__score');
  let localResult = JSON.parse(localStorage.getItem('result'));
  if (localResult === null) {
    userScore.textContent = `you:0`;
    computerScore.textContent = `computer:0`;
    localResult.computer = localResult.computer + 1;
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

//가위바위보 아이콘 돌아가게하기
function itsInterval() {
  setInterval(() => {
    let xx = 0.1;
    for (let el of test) {
      setTimeout(() => (icons.className = el), xx * 1000);
      xx += 0.1;
    }
  }, 100);
}

//가위바위보 버튼 클릭했을 때 이벤트
btns.addEventListener('click', (e) => {
  const userResult = document.querySelector('#userResult');
  const iconsResult = document.querySelector('#realResult');

  if (isRotate === false) {
    return;
  }
  if (test.includes(e.target.className) === false) {
    return;
  }
  isRotate = !isRotate;
  clearInterval(itsInterval);
  interval = null;
  console.log(interval);
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
  const userScore = document.querySelector('.user__score');
  const computerScore = document.querySelector('.computer__score');
  console.log(localResult);
  if (result === 'win') {
    resultMessage.textContent = 'YOU WIN!';
    localResult.user = localResult.user + 1;
    userScore.textContent = `you:${localResult.user}`;
    console.log(localResult);
    localStorage.setItem('result', JSON.stringify(localResult));
  } else if (result === 'tie') {
    resultMessage.textContent = "IT'S A TIE!";
  } else {
    resultMessage.textContent = 'YOU LOSE!';
    localResult.computer = localResult.computer + 1;
    computerScore.textContent = `:${localResult.computer}`;
    localStorage.setItem('result', JSON.stringify(localResult));
  }
}

itsInterval();
restart.addEventListener('click', itsInterval);
