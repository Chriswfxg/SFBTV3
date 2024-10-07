// Function to send a message
function sendMessage() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const messageBox = document.getElementById("message-box");

    // Show user input in chat
    messageBox.innerHTML += `<div class="user-message">${userInput}</div>`;

    // Clear the input field
    document.getElementById("user-input").value = "";

    // Delay the bot's response by 3 seconds
    setTimeout(() => {
        let response = "Sorry, I don't understand that.";

        // Check if there's a matching rule
        for (let keyword in rules) {
            if (userInput.includes(keyword)) {
                response = rules[keyword];
                break;
            }
        }

        messageBox.innerHTML += `<div class="bot-message">${response}</div>`;
        messageBox.scrollTop = messageBox.scrollHeight; // Scroll to the bottom
    }, 3000);
}
