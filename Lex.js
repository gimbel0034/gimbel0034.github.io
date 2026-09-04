// Add new rule dynamically
document.getElementById("addRuleBtn").addEventListener("click", () => {
    const rulesSection = document.getElementById("rules");

    const newCard = document.createElement("div");
    newCard.className = "rule-card";

    newCard.innerHTML = `
        <span class="rule-tag">New</span>
        <h3>Custom Rule Added</h3>
        <p>This rule was added dynamically using JavaScript.</p>
    `;

    rulesSection.appendChild(newCard);
});

// Example case file generator
const caseOutput = document.getElementById("caseOutput");

function addCaseFile(text) {
    const entry = document.createElement("p");
    entry.textContent = text;
    caseOutput.appendChild(entry);
}

// Demo case file
addCaseFile("Case #A102: Unauthorized kryptonite movement detected near Warehouse 3.");
