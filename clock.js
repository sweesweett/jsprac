const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
function setClock() {
  let now = new Date();
  let getHours = now.getHours() * 30;
  let getMinutes = now.getMinutes() * 6;
  let getSeconds = now.getSeconds() * 6;
  second.style.transform = `rotateZ(${getSeconds}deg)`;
  minute.style.transform = `rotateZ(${getMinutes}deg)`;
  hour.style.transform = `rotateZ(${getHours + getMinutes / 12}deg)`;
}
setClock();
setInterval(setClock, 1000);
