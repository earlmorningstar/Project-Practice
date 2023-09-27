const daysPole = document.getElementById("days");
const hoursPole = document.getElementById("hours");
const minsPole = document.getElementById("mins");
const secPole = document.getElementById("sec");

const newYear = "1 Jan 2024";

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const sec = Math.floor(totalSeconds) % 60;

daysPole.innerHTML = days;
hoursPole.innerHTML = hours;
minsPole.innerHTML = mins;
secPole.innerHTML = sec;


  // console.log(newYearDate - currentDate);
  // console.log(days, hours, mins, seconds);
}

// daysPole.innerHTML = days;
// hoursPole.innerHTML = hours;
// minsPole.innerHTML = mins;
// secPole.innerHTML = sec;

countdown();

setInterval(countdown, 1000);
