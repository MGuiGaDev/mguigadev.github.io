let btn;
let count = 0;
document.addEventListener("DOMContentLoaded", assignEvents);
function assignEvents() {
    btn = document.querySelector("button");
    btn.addEventListener("click", draw);
}
function draw() {
    count++;
    let clicks = count===1? "vez.":"veces.";
    document.querySelector("div").innerHTML = `<p>Hola, Alberto... estoy probando lo que va a ser mi portfolio amateur de mierda...<p> <h1>Tío, has pulsado ya ${count} ${clicks}</h1>`;
}