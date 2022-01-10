// THEME CHANGE SWITCH
const setTheme = theme => document.documentElement.className = theme;

// TIME SENSITIVE WELCOME MESSAGE

var today = new Date();
var time = new Date().toLocaleTimeString();
var greeting = document.getElementById('time-greeting');

if (time < '12:00:00') {
    greeting.innerHTML = `Good morning! It's ${time}`;
} else if (time >= '12:00:00' && time < '18:00:00') {
    greeting.innerHTML = `Good Afternoon! It's ${time}`;
} else {
    greeting.innerHTML = `Good Evening! It's ${time}`;
    setTheme('dark');
}

// CLOCK FUNCTION

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('startTime').innerHTML =  `${h}:${m}:${s}`;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

// GET CURRENT YEAR

// let yearNow;

const currentYear = () => {
  let yearNow = new Date().getFullYear();
  document.getElementById('copyright').innerHTML = `&copy; ${yearNow} Mike Francis`;
;}

currentYear();