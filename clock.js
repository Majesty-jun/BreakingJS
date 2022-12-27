const clock = document.querySelector(".clock");

const time = {
  hours: 0,
  minutes: 0,
  seconds: 0
};

function getClock() {
  const now = new Date();
  let AMPM = 'AM';
  time.hours = now.getHours();
  time.minutes = String(now.getMinutes()).padStart(2, '0');
  time.seconds = String(now.getSeconds()).padStart(2, '0');
  AMPM = dayOrNight(time);
  time.hours = String(time.hours).padStart(2, '0');
  clock.innerText = `${time.hours}:${time.minutes}:${time.seconds} ${AMPM}`;
};

function dayOrNight(time) {
  let AMPM = 'AM';
  if (time.hours > 12) {
    time.hours -= 12;
    AMPM = 'PM';
  }
  return AMPM;
}

getClock();
setInterval(getClock, 1000);