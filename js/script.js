
document.getElementById("submit").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const dream = document.getElementById("dream").value;
    const selectedColor = document.querySelector(".color-box.selected")?.dataset.color;
    localStorage.setItem("userName", name);
    localStorage.setItem("userDream", dream);
    localStorage.setItem("userColor", selectedColor);
    document.body.style.backgroundColor = selectedColor;
    window.location.href = "home.html";
});
