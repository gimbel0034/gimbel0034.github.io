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
// ===============================
// Holiday Celebration Center
// ===============================

const holidayMessages = {

christmasEve: [
"🎄 Merry Christmas Eve! Enjoy family, cookies, and holiday lights.",
"🎅 Christmas Eve is perfect for movies, cocoa, and family traditions.",
"🏰 Disney Christmas magic is in the air tonight."
],

christmas: [
"🎁 Merry Christmas! Wishing you joy and happiness.",
"🎄 Today is a day for celebration, giving, and family memories.",
"🏰 Mickey and Minnie wish you a magical Christmas."
],

newYearsEve: [
"🎆 Happy New Year's Eve! Get ready for the countdown.",
"🎉 Celebrate your achievements and welcome new adventures.",
"✨ Make magical memories tonight."
],

newYearsDay: [
"🌟 Happy New Year!",
"🎉 A fresh year means new opportunities and new goals.",
"📚 Start the year with learning and positivity."
]

};

// =================================
// Display Holiday Greeting
// =================================

function showHolidayGreeting(holiday){

const display =
document.getElementById("holidayGreeting");

const messages = holidayMessages[holiday];

const random =
Math.floor(Math.random() * messages.length);

display.innerHTML =
messages[random];

}

// =================================
// Holiday Countdown Calculator
// =================================

function holidayCountdown(){

const today = new Date();

const christmas =
new Date(today.getFullYear(),11,25);

if(today > christmas){
christmas.setFullYear(today.getFullYear()+1);
}

const difference =
christmas - today;

const days =
Math.floor(difference/(1000*60*60*24));

document.getElementById("countdown")
.innerHTML =
"🎄 Days Until Christmas: " + days;

}

// =================================
// Holiday Activity Generator
// =================================

function holidayActivity(){

const activities = [

"🎨 Create a Disney holiday drawing.",

"🍪 Bake holiday cookies with family.",

"📚 Read a Christmas story.",

"🎄 Decorate a holiday ornament.",

"🎁 Write a gratitude list.",

"🎥 Watch a favorite holiday movie.",

"🏰 Design your dream Disney castle.",

"🧩 Play a family board game."

];

let random =
Math.floor(Math.random() *
activities.length);

document.getElementById("activity")
.innerHTML =
activities[random];

}

// =================================
// Holiday Recipe Generator
// =================================

function holidayRecipe(){

const recipes = [

"🍪 Mickey Sugar Cookies",

"☕ Holiday Hot Chocolate",

"🍎 Cinnamon Apple Crisp",

"🎄 Christmas Pancakes",

"🍫 Chocolate Peppermint Brownies",

"🍍 Disney Dole Whip",

"🧁 Minnie Mouse Cupcakes"

];

let random =
Math.floor(Math.random() *
recipes.length);

document.getElementById("recipe")
.innerHTML =
recipes[random];

}

// =================================
// Positive Holiday Wellness Message
// =================================

function holidayWellness(){

const messages = [

"💙 Remember to take care of yourself during busy holidays.",

"😊 It's okay to take breaks and rest.",

"🌟 Your mental health matters every day.",

"🤝 Spend time with supportive friends and family.",

"🎄 Enjoy small moments of joy and peace.",

"💚 Practice gratitude and kindness."

];

let random =
Math.floor(Math.random() *
messages.length);

document.getElementById("wellness")
.innerHTML =
messages[random];

}

// =================================
// Fun Holiday Quiz
// =================================

function holidayQuiz(){

const questions = [

"🎅 What holiday comes before New Year's Day?",

"🎄 Which holiday traditionally includes decorating a tree?",

"🎆 Which holiday features countdown celebrations?",

"🎁 Which holiday often includes exchanging gifts?"

];

let random =
Math.floor(Math.random() *
questions.length);

document.getElementById("quiz")
.innerHTML =
questions[random];

}

// Run countdown automatically
window.onload = function(){

holidayCountdown();

};
