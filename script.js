// THEME CHANGE SWITCH
const setTheme = theme => document.documentElement.className = theme;

// TIME SENSITIVE WELCOME MESSAGE
//to do...

let test = "this is a test";
document.getElementById("welcome").innerHTML = "<p>Hello!</p>";
document.getElementById("welcome1").innerHTML = test;
document.getElementById("welcome2").innerHTML = `The test variable says "${test}".`;