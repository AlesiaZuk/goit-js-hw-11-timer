import refs from './refs.js';

const { day, hour, min, sec, textTimer } = refs;

let endDate = new Date('Oct 6, 2021 19:30:00').getTime();

console.log(endDate);
let timer = setInterval(() => {
  let nowDate = new Date().getTime();
  let distance = endDate - nowDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  day.textContent = days;
  hour.textContent = hours;
  min.textContent = mins;
  sec.textContent = secs;

  if (distance < 0) {
    clearInterval(timer);
    textTimer.innerHTML = 'EXPIRED';
  }
}, 1000);
