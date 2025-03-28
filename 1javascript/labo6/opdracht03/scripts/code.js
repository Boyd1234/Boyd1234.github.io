const setup = () => {
    document.getElementById("btnPress").addEventListener("click", verander)
}

const verander = () => {
    let div = document.querySelector("#myDIV");
    let p = document.createElement("p");
    p.textContent = "een beetje tekst";
    div.appendChild(p);

}
window.addEventListener("load", setup);