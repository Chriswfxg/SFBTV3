let rules = {
    "hello": "Hi! How can I help you today?",
    "how are you": "I'm a bot, but I'm doing great! Thanks for asking.",
    "bye": "Goodbye! Have a great day."
};

// Function to display the current rules
function displayRules() {
    const rulesList = document.getElementById("rules-list");
    rulesList.innerHTML = ""; // Clear existing list

    for (let keyword in rules) {
        const listItem = document.createElement("li");
        listItem.textContent = `"${keyword}" → "${rules[keyword]}"`;
        rulesList.appendChild(listItem);
    }
}

// Call displayRules initially to show default rules
displayRules();

// Function to add a new rule
function addRule() {
    const keyword = document.getElementById("keyword-input").value.toLowerCase();
    const response = document.getElementById("response-input").value;

    if (keyword && response) {
        rules[keyword] = response;

        // Update the rules display
        displayRules();

        // Clear the input fields
        document.getElementById("keyword-input").value = "";
        document.getElementById("response-input").value = "";
    }
}
