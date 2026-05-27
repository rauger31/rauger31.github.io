const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

let attempts = 0;

function moveButton(){

    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.left = x + "px";
    noButton.style.top = y + "px";

    // rotation fun 😄
    const rotation = Math.random() * 40 - 20;
    noButton.style.transform = `rotate(${rotation}deg)`;
}

function escapeButton(){

    attempts++;

    // OUI grossit ❤️
    const scale = 1 + attempts * 0.15;
    yesButton.style.transform = `scale(${scale})`;

    // texte drôle 😈
    if(attempts === 1){
        noButton.textContent = "Tu es sûr ? 😳";
    }

    if(attempts === 2){
        noButton.textContent = "Réfléchis 😭";
    }

    if(attempts >= 3){
        noButton.textContent = "Impossible 😈";
    }

    moveButton();
}

// PC
noButton.addEventListener("mouseenter", escapeButton);

// Mobile
noButton.addEventListener("touchstart", escapeButton);
