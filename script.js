const noButton = document.getElementById("noButton");

if (noButton) {

    const moveButton = () => {

        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noButton.style.left = x + "px";
        noButton.style.top = y + "px";
    };

    // desktop
    noButton.addEventListener("mouseenter", moveButton);

    // mobile (IMPORTANT !)
    noButton.addEventListener("touchstart", moveButton);

}
