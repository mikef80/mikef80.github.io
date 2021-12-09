// THEME CHANGE SWITCH
const setTheme = theme => document.documentElement.className = theme;

// TIME SENSITIVE WELCOME MESSAGE
var today = new Date();
var time = new Date().toLocaleTimeString();
var hour = today.getHours();
var greeting = document.getElementById("time-greeting");

if (hour < 12) {
    greeting.innerHTML = `Good morning! It's ${time}`;
} else if (hour >= 12 && hour < 18) {
    greeting.innerHTML = `Good Afternoon! It's ${time}`;
} else {
    greeting.innerHTML = `Good Evening! It's ${time}`;
    setTheme('dark');
}

// TEST JS CODE

let test = "this is a test";
document.getElementById("welcome").innerHTML = "<p>Hello!</p>";
document.getElementById("welcome1").innerHTML = test;
document.getElementById("welcome2").innerHTML = `The test variable says "${test}".`;