/* Ejercicio 2 star animation */

const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove", (e) => {
    /* console.log("moved"); */
    /* console.log(e.offsetX); */
    const xPos = e.offsetX;
    const yPos = e.offsetY;
    const spanElement = document.createElement("span");
    spanElement.style.left = xPos + "px";
    spanElement.style.top = yPos + "px";
    const size = Math.random()*100;
    spanElement.style.width = size + "px";
    spanElement.style.height = size + "px";
    bodyElement.appendChild(spanElement);
    setTimeout(() => {
        spanElement.remove();
    }, 3000);
});