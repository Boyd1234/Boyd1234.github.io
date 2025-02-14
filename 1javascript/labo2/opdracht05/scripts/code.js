const setup = () => {
    document.getElementById("btnVerander").addEventListener('click',verander);
}

const verander = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);