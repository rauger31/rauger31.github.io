const noButton = document.getElementById("noButton");

if (noButton) {

    noButton.addEventListener("mouseover", () => {

        const maxX = window.innerWidth - 120;
        const maxY = window.innerHeight - 80;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";

    });

}
