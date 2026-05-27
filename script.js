const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const yesImage = document.querySelector(".yes-img");
let attempts = 0;

function moveNo() {
    const parent = noButton.parentElement; // .choice
    const maxX = parent.offsetWidth - noButton.offsetWidth;
    const maxY = parent.offsetHeight - noButton.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.left = x + "px";
    noButton.style.top = y + "px";

    const rotation = Math.random() * 20 - 10;
    noButton.style.transform = `rotate(${rotation}deg)`;
}

function escapeButton() {
    attempts++;

    // bouton OUI grossit
    const scale = 1 + attempts * 0.12;
    yesButton.style.transform = `scale(${scale})`;
    yesImage.style.transform = `scale(${scale})`;
    yesButton.style.boxShadow = `0 0 ${10 + attempts*5}px rgba(233,30,99,0.5)`;

    // 🖤 NOIR & BLANC progressif
    const grayscale = Math.min(attempts * 10, 100);
    noImage.style.filter = `grayscale(${grayscale}%)`;
    
    // texte du NON
    if(attempts === 1) noButton.textContent = "Tu es sûr ? 😳";
    if(attempts === 2) noButton.textContent = "Réfléchis 😭";
    if(attempts >= 3) noButton.textContent = "Impossible 😈";

    moveNo();
}

noButton.addEventListener("mouseenter", escapeButton);
noButton.addEventListener("touchstart", escapeButton);
