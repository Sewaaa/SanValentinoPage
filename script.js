const messages = [
    "Credo che ti sei sbagliata",
    "Il SI è quello VERDE",
    "VERDE HULK E NON ROSSO IRONMAN",
    "Sei daltonica?",
    "Allora non mi ami",
    "Bisticcio",
    "TI HO DETTO BISTICCIO",
    "NON MI AMI PIU'",
    "DAI DAI DAI DAI DAI",
    "ok basta ultima chance ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}