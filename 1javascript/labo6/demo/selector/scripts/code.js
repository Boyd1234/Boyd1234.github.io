const setup = () => {
    let lstParDiv = document.querySelectorAll("#myDIV > .color") //elementen met klasse color die een ouder hebben met id mydiv

    for(let i = 0; i < lstParDiv.length; i++) {
        lstParDiv[i].addEventListener("click", changeDiv) //automatisch element die event veroorzaakt meegeven
    }
}

const changeDiv = (event) => {
    event.target.className = "colorParDiv"
}
window.addEventListener("load", setup);