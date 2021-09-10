import refs from './refs.js';

const { day, hour, min, sec, textTimer } = refs;

class CountdownTimer {
  constructor({ selector, endDate }) {
    this.intervalId = null;
    this.selector = selector;
    this.endDate = endDate;

    this.start();
  }

  start() {
    this.intervalId = setInterval(() => {
      let nowDate = new Date().getTime();
      let distance = this.endDate.getTime() - nowDate;

      if (distance <= 0) {
        this.stop();
      } else {
        const time = this.getTimeComponents(distance);
        this.updateClockface(time);
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    textTimer.textContent = `${'истекший'}`;
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateClockface({ days, hours, mins, secs }) {
    day.textContent = `${days}`;
    hour.textContent = `${hours}`;
    min.textContent = `${mins}`;
    sec.textContent = `${secs}`;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  endDate: new Date('Oct 6, 2021 19:30:00'),
});
