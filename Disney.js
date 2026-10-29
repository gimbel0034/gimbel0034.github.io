function studyTip(){

const tips = [
"Break large assignments into smaller tasks.",
"Read directions carefully.",
"Review notes daily.",
"Take short study breaks.",
"Stay organized with a planner."
];

document.getElementById("tip").innerHTML =
tips[Math.floor(Math.random()*tips.length)];

}
function motivation(){

const messages = [

"Every day is a new beginning.",

"You are stronger than you think.",

"Small steps create big achievements.",

"Your story matters.",

"Keep believing in yourself.",

"You can learn something new today."

];

let random =
Math.floor(Math.random()*messages.length);

document.getElementById("message")
.innerHTML = messages[random];

}
