const clock = document.querySelector(".clock");
const country = document.querySelector(".country");

const time = {
  hours: 0,
  minutes: 0,
  seconds: 0
};

function getClock() {
  const now = new Date();
  let AMPM = 'AM';
  time.hours = now.getHours();
  time.minutes = now.getMinutes();
  time.seconds = now.getSeconds();
  worldTime();
  removeMinusTime(time);
  AMPM = checkDayOrNight(AMPM);
  changeToString();
  clock.innerText = `${time.hours} : ${time.minutes} : ${time.seconds} ${AMPM}`;
}

function changeToString() {
  time.hours = String(time.hours).padStart(2, '0');
  time.minutes = String(time.minutes).padStart(2, '0');
  time.seconds = String(time.seconds).padStart(2, '0');
}

function checkDayOrNight(AMPM) {
  if (time.hours > 12) {
    AMPM = 'PM';
    time.hours -= 12;
  }
  return AMPM;
}

function worldTime() {
  switch (country.value) {
    case 'washington':  time.hours -= 17; break;
    case 'saopaulo':    time.hours -= 12; break;
    case 'london':      time.hours -= 9;  break;
    case 'cairo':       time.hours -= 7;  break;
    case 'beijing':     time.hours -= 1;  break;
    case 'bangkok':     time.hours -= 2;  break;
    case 'paris':       time.hours -= 8;  break;
    case 'sydney':      time.hours += 1;  break;
  }
}

function removeMinusTime(obj) {
  if (obj.hours < 0) 
    obj.hours = 24 + obj.hours;
  if (obj.minutes < 0)
    obj.minutes = 60 - obj.minutes;
  if (obj.seconds < 0)
    obj.seconds = 60 - obj.seconds;
}

getClock();
setInterval(getClock, 1000);