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

function motiva*ion(){

const messages = [
"You matter.",
"Every small step counts.",
"Believe in yourself.",
"Learning happens one day at a time.",
"You are stronger than you realize."
];

document.getElementById("message").innerHTML =
messages[Math.floor(Math.random()*messages.length)];

}
