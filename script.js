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
    }

    function growYes() {

        attempts++;

        // 🔥 agrandit le bouton OUI
        let scale = 1 + attempts * 0.15;
        yesButton.style.transform = `scale(${scale})`;

        // rend le bouton OUI plus “important”
        yesButton.style.transition = "0.3s";
        yesButton.style.boxShadow = `0 0 ${10 + attempts * 5}px rgba(233,30,99,0.6)`;

        // texte évolutif
        if (attempts === 1) yesButton.textContent = "OUI ❤️";
        if (attempts === 2) yesButton.textContent = "OUI 😍";
        if (attempts === 3) yesButton.textContent = "OUI 💍";
        if (attempts >= 4) yesButton.textContent = "OUIII 🔥";

        moveNo();
    }

    const rotation = Math.random() * 40 - 20;
    noButton.style.transform = `rotate(${rotation}deg)`;
    
    // 🖱️ PC
    noButton.addEventListener("mouseenter", growYes);

    // 📱 mobile
    noButton.addEventListener("touchstart", growYes);
}
