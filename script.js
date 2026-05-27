const noButton = document.getElementById("noButton");

if (noButton) {

    let speed = 1;
    let attempts = 0;

    const texts = [
        "Non 😢",
        "T'es sûr ?"
    ];

    function moveButton() {

        const rect = noButton.getBoundingClientRect();

        const maxX = window.innerWidth - rect.width;
        const maxY = window.innerHeight - rect.height;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noButton.style.left = x + "px";
        noButton.style.top = y + "px";
    }

    function escapeLogic() {

        attempts++;

        // change le texte
        if (attempts < texts.length) {
            noButton.textContent = texts[attempts];
        }

        // augmente la vitesse
        speed += 0.2;

        // bouge plus loin
        moveButton();

        // après 3 essais → mode impossible
        if (attempts >= 3) {

            noButton.textContent = "❌ Impossible";
            noButton.style.background = "#333";

            // fuite automatique toutes les 200ms
            setInterval(() => {
                moveButton();
            }, 200);
        }
    }

    // desktop
    noButton.addEventListener("mouseenter", escapeLogic);

    // mobile
    noButton.addEventListener("touchstart", escapeLogic);

    noButton.addEventListener("mouseover", () => {
    noButton.style.transform = "scale(1.1) rotate(" + (Math.random()*10-5) + "deg)";
});
}
