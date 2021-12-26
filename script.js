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
//   document.getElementById('startTime').innerHTML =  h + ":" + m + ":" + s;
  document.getElementById('startTime').innerHTML =  `${h}:${m}:${s}`;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

// TEST JS CODE

/* var test = "this is a test";
document.getElementById('welcome').innerHTML = 'Hello!';
document.getElementById('welcome1').innerHTML = test;
document.getElementById('welcome2').innerHTML = `The test variable says "${test}".`; */

// GALLERY SLIDER

/* let slider = document.getElementById("gallerySize");
let output = document.getElementById("output");
output.innerHTML = slider.value;

gallerySize.oninput = function () {
  output.innerHTML = this.value;
} */

let display = document.getElementById("output");
let widthd = document.getElementById("pic1");
output.innerHTML = widthd.value;