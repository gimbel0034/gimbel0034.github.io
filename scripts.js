// ===== Basic Welcome Message =====
console.log("Website Loaded Successfully");

// Show a welcome alert when the page loads
window.addEventListener("load", () => {
    console.log("Page is fully loaded");
});


// ===== Button Click Example =====
const btn = document.getElementById("myButton");

if (btn) {
    btn.addEventListener("click", () => {
        alert("You clicked the button!");
    });
}


// ===== Change Text Example =====
const changeTextBtn = document.getElementById("changeTextBtn");
const textBox = document.getElementById("textBox");

if (changeTextBtn && textBox) {
    changeTextBtn.addEventListener("click", () => {
        textBox.textContent = "The text has been updated!";
    });
}


// ===== Add New Item to a List =====
const addItemBtn = document.getElementById("addItemBtn");
const list = document.getElementById("myList");

if (addItemBtn && list) {
    addItemBtn.addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = "New item added!";
        list.appendChild(li);
    });
}


// ===== Toggle Dark Mode =====
const toggleModeBtn = document.getElementById("toggleMode");

if (toggleModeBtn) {
    toggleModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}
