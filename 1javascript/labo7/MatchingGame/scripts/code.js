let global={
    AANTAL_HORIZONTAAL:4,
    AANTAL_VERTICAAL:3,
    AANTAL_KAARTEN:6
}

const setup = () => {
    let String = ["../images/kaart1.png", "../images/kaart2.png", "../images/kaart3.png", "../images/kaart4.png", "../images/kaart5.png", "../images/kaart6.png"]
    let kaarten = document.querySelectorAll(".card");
    for(let i = 0; i < kaarten.length; i++) {
        kaarten[i].addEventListener("click", draaiOm);
    }
}

const draaiOm = () => {

}
window.addEventListener("load", setup);