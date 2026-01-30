const button = document.querySelector(".btn");
const mainText = document.querySelector(".main-text");

button.addEventListener("click", () => {
    if (mainText.style.display != "none") {
        mainText.style.display = "none";
        button.innerHTML = "show text";
    } else {
        mainText.style.display = "inline";
        button.innerHTML = "Hide text";
    }
});