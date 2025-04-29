let tafelsData = [];

const setup = () => {
    document.getElementById("btnGo").addEventListener("click", maakNieuweTafel);
    document.querySelector("label").addEventListener("click", () => {
        document.getElementById("tafelvan").focus();
    });
}

const maakNieuweTafel = () => {
    let inputElem = document.getElementById("tafelvan");
    let input = parseInt(inputElem.value);

    if (isNaN(input)) {
        alert("Voer een geldig nummer in");
        return;
    }

    tafelsData.push({
        getal: input,
        tijd: new Date().toLocaleTimeString()
    });

    inputElem.value = "";
    toonTafels();
}

const toonTafels = () => {
    let body = document.getElementsByClassName("body")[0];
    verwijderAlleChildren(body);

    for (let j = 0; j < tafelsData.length; j++) {
        let tafel = tafelsData[j];

        let division = document.createElement("div");
        division.className = "tafel";

        let header = document.createElement("div");
        header.className = "tafel-header";
        header.textContent = `Tafel van ${tafel.getal} aangemaakt op: ${tafel.tijd}`;
        division.appendChild(header);

        for (let i = 0; i <= 10; i++) {
            let rij = document.createElement("div");
            rij.className = "tafel-rij";
            rij.textContent = `${tafel.getal} x ${i} = ${tafel.getal * i}`;

            if (i % 2 === 0) {
                rij.classList.add("even");
            }

            division.appendChild(rij);
        }

        body.appendChild(division);
    }
}

const verwijderAlleChildren = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

window.addEventListener("load", setup);