const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

let attempts = 0;

if (noButton && yesButton) {

    function moveNo() {

        const rect = noButton.getBoundingClientRect();

        const maxX = window.innerWidth - rect.width;
        const maxY = window.innerHeight - rect.height;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noButton.style.left = x + "px";
        noButton.style.top = y + "px";

        // 😈 rotation aléatoire
        const rotation = Math.random() * 40 - 20;
        noButton.style.transform = `rotate(${rotation}deg)`;
    }

    function growYes() {

        attempts++;

        // ❤️ bouton OUI grossit
        let scale = 1 + attempts * 0.15;
        yesButton.style.transform = `scale(${scale})`;

        yesButton.style.transition = "0.3s";
        yesButton.style.boxShadow =
            `0 0 ${10 + attempts * 5}px rgba(233,30,99,0.6)`;

        // 😄 textes fun
        if (attempts === 1) {
            yesButton.textContent = "OUI ❤️";
        }

        if (attempts === 2) {
            yesButton.textContent = "OUI 😍";
        }

        if (attempts === 3) {
            yesButton.textContent = "OUI 💍";
        }

        if (attempts >= 4) {
            yesButton.textContent = "OUIII 🔥";
        }

        // 🔥 le NON fuit
        moveNo();
    }

    // 🖱️ PC
    noButton.addEventListener("mouseenter", growYes);

    // 📱 Mobile
    noButton.addEventListener("touchstart", growYes);
}
