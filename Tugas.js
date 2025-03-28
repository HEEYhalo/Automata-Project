function validateNumber() {
    let input = document.getElementById("numberInput").value;

    input = input.replace(/,/g, ".");

    let regex = /^(?:(?:[1-9]\d*(?:\.\d+)?|0(?:\.\d+)?|-[1-9]\d*(?:\.\d+)?)(?:e[-+]?\d+)?$)$/i;

    let message = document.getElementById("message");

    if (regex.test(input)) {
        message.textContent = "Yes, it is a number";
        message.style.color = "green";
    } else {
        message.textContent = "No, it is not a number";
        message.style.color = "red";
    }
}
