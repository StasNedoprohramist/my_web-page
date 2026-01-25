const button = document.querySelector(".btn");
const mainText = document.querySelector(".main-text");

button.addEventListener("click", () => {
    if (mainText.innerHTML === "Hello world!") {
        mainText.innerHTML = "";
        button.innerHTML = "show text";
    } else {
        mainText.innerHTML = "Hello world!";
        button.innerHTML = "Hide text";
    }
});