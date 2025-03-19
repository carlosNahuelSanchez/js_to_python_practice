document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("textInput");
    const button = document.getElementById("submitButton");
    const container = document.getElementById("textContainer");

    button.addEventListener("click", function () {
        let inputText = input.value.trim();
        if (inputText === "") return; 

        container.innerHTML = "";

        let newBox = document.createElement("div");
        newBox.classList.add("p-3", "bg-light", "text-dark", "border", "rounded", "mb-2");
        newBox.textContent = inputText;

        newBox.addEventListener("click", function () {
            if (newBox.classList.contains("bg-light")) {
                newBox.classList.remove("bg-light", "text-dark");
                newBox.classList.add("bg-dark", "text-white");
            } else if (newBox.classList.contains("bg-dark")) {
                newBox.classList.remove("bg-dark", "text-white");
                newBox.classList.add("bg-info", "text-danger");
            } else if (newBox.classList.contains("bg-info")) {
                newBox.classList.remove("bg-info", "text-danger");
                newBox.classList.add("bg-light", "text-dark");
            }
        });

        container.appendChild(newBox);

        input.value = "";
    });
});
