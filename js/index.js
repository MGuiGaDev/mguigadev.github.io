let btn;
document.addEventListener("DOMContentLoaded", assignEvents);
function assignEvents() {
    btn = document.querySelector("button");
    btn.addEventListener("click", draw);
}
function draw() {
    btn.insertAdjacentText("afterend", "asdasddsa")
}