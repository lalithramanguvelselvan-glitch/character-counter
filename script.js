const message = document.getElementById("message");
const count = document.getElementById("count");
const remaining = document.getElementById("remaining");
const warning = document.getElementById("warning");

const maxCharacters = 200;

// Update the counter in real time
message.addEventListener("input", function () {
    let text = message.value;

    // Prevent more than 200 characters
    if (text.length > maxCharacters) {
        message.value = text.slice(0, maxCharacters);
        text = message.value;

        warning.textContent =
            "Warning: Maximum 200 characters allowed!";
    } else {
        warning.textContent = "";
    }

    const typed = text.length;
    const left = maxCharacters - typed;

    count.textContent = typed;
    remaining.textContent =
        left + " characters remaining";
});