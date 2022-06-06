const btns = document.querySelector('.btns');

btns.onclick = (e) => {
  const analogContainer = document.querySelector('.clock__analog__container');
  const digitalContainer = document.querySelector('.clock__digital__container');
  if (e.target.className === 'analog') {
    analogContainer.style.display = 'flex';
    digitalContainer.style.display = 'none';
  } else if (e.target.className === 'digital') {
    analogContainer.style.display = 'none';
    digitalContainer.style.display = 'flex';
  }
};

function setAnalogClock() {
  const hour = document.querySelector('.hour');
  const minute = document.querySelector('.minute');
  const second = document.querySelector('.second');
  let now = new Date();
  let getHours = now.getHours() * 30;
  let getMinutes = now.getMinutes() * 6;
  let getSeconds = now.getSeconds() * 6;
  second.style.transform = `rotateZ(${getSeconds}deg)`;
  minute.style.transform = `rotateZ(${getMinutes}deg)`;
  hour.style.transform = `rotateZ(${getHours + getMinutes / 12}deg)`;
}
setAnalogClock();
setInterval(setAnalogClock, 1000);

function setDigitalClock() {
  const hour = document.querySelector('.hours');
  const minute = document.querySelector('.minutes');
  const second = document.querySelector('.seconds');
  const amPm = document.querySelector('.ampm');
  let now = new Date();
  let isAmPm = 'AM';
  let getHours = now.getHours();

  let issmaller10 = function (num) {
    if (num < 10) {
      num = '0' + num;
      return num;
    }
    return num;
  };

  if (getHours > 12) {
    getHours = issmaller10(24 - getHours);
    isAmPm = 'PM';
  }

  let getMinutes = issmaller10(now.getMinutes());
  let getSeconds = issmaller10(now.getSeconds());

  hour.textContent = getHours;
  minute.textContent = getMinutes;
  second.textContent = getSeconds;
  amPm.textContent = isAmPm;
}
setDigitalClock();
setInterval(setDigitalClock, 1000);
