const setup = () => {
    let btnResultaat = document.getElementById("btnResultaat");
    btnResultaat.addEventListener("click", resultaatConsole)
}

const resultaatConsole = () => {
    let roker = document.getElementById("roker").checked ? "is een roker" : "is geen roker";
    let moedertaal = document.querySelector('input[name="moedertaal"]:checked');
    moedertaal = moedertaal? moedertaal.value : "niks gekozen";
    let favBuurland = document.getElementById("favBl").value;
    let bestellingen = [];
    document.querySelectorAll("#bestellingen option:checked").forEach(option => {
        bestellingen.push(option.value)

        console.log(roker);
        console.log("moedertaal is " + moedertaal);
        console.log("favoriete buurland is " + favBuurland);
        console.log("bestelling bestaat uit " + bestellingen.join(", "));
    })
}
window.addEventListener("load", setup);