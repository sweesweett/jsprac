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
    let xx = 0.1;
    test.forEach((el) => {
      setTimeout(() => (icons.className = el), xx * 1000);
      xx += 0.1;
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
    computerScore.textContent = `computer:${localResult.computer}`;
    localStorage.setItem('result', JSON.stringify(localResult));
  }
}
initialization.addEventListener('click', () => {
  localStorage.setItem('result', JSON.stringify({ computer: 0, user: 0 }));
  userScore.textContent = 'you:0';
  computerScore.textContent = 'computer:0';
  //초기화 하고 나면 자동으로 돌 수 있도록 해야겠음
});
restart.addEventListener('click', () => {
  isRotate = true;
  startInterval();
});

// function gameClosure() {
//   function game() {
//     /* This is just an example, replace this with the body of gameInit() */
//     console.log('The game is running');
//   }

//   let itsInterval;

//   return {
//     start() {
//       isRotate = !isRotate;
//       itsInterval = setInterval(() => {
//         let xx = 0.1;
//         for (let el of test) {
//           setTimeout(() => (icons.className = el), xx * 1000);
//           xx += 0.1;
//         }
//       }, 100);
//     },
//     stop() {
//       const userResult = document.querySelector('#userResult');
//       const iconsResult = document.querySelector('#realResult');
//       btns.addEventListener('click', (e) => {
//         if (isRotate === false) {
//           return;
//         }
//         if (test.includes(e.target.className) === false) {
//           return;
//         }
//         isRotate = !isRotate;
//         clearInterval(itsInterval);
//         icons.style.display = 'none';
//         iconsResult.className = test[Math.floor(Math.random() * test.length)];
//         iconsResult.style.display = 'block';
//         userResult.className = e.target.className;

//         if (e.target.className === iconsResult.className) {
//           gameResult('tie');
//         } else if (e.target.className === test[0]) {
//           if (iconsResult.className === test[2]) {
//             gameResult('lose');
//           } else {
//             gameResult('win');
//           }
//         } else if (e.target.className === test[1]) {
//           if (iconsResult.className === test[0]) {
//             gameResult('lose');
//           } else {
//             gameResult('win');
//           }
//         } else if (e.target.className === test[2]) {
//           if (iconsResult.className === test[1]) {
//             gameResult('lose');
//           } else {
//             gameResult('win');
//           }
//         }
//       });
//     },
//   };
// }

// let game = gameClosure();

// btns.onclick = game.stop();
// restart.onclick = game.start();
