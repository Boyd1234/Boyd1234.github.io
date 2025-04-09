let personen = [];
let huidigeIndex = -1;

const setup = () => {
    document.getElementById("btnBewaar").addEventListener("click", bewaarBewerktePersoon);
    document.getElementById("btnNieuw").addEventListener("click", bewerkNieuwePersoon);
    document.getElementById("lstPersonen").addEventListener("change", bewerkHuidigePersoon);
};

window.addEventListener("load", setup);

const bewerkNieuwePersoon = () => {
    huidigeIndex = -1;
    document.querySelectorAll('input[type="text"]').forEach(elem => elem.value = "");
};

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    valideer();

    const fouten = document.getElementsByClassName("invalid");
    if (fouten.length > 0) return;

    let persoon = {};

    if (huidigeIndex === -1) {
        // Nieuwe persoon toevoegen
        vulPersoonOpBasisVanUserInterface(persoon);
        personen.push(persoon);
        voegPersoonToeAanLijstInUserInterface(persoon, personen.length - 1);
        document.getElementById("lstPersonen").selectedIndex = personen.length - 1;
        huidigeIndex = personen.length - 1;
    } else {
        // Bestaande persoon bijwerken
        persoon = personen[huidigeIndex];
        vulPersoonOpBasisVanUserInterface(persoon);
        updatePersoonInLijstInUserInterface(huidigeIndex, persoon);
    }
};

const vulPersoonOpBasisVanUserInterface = (persoon) => {
    persoon.voornaam = document.getElementById("txtVoornaam").value.trim();
    persoon.familienaam = document.getElementById("txtFamilienaam").value.trim();
    persoon.geboorteDatum = document.getElementById("txtGeboorteDatum").value.trim();
    persoon.email = document.getElementById("txtEmail").value.trim();
    persoon.aantalKinderen = parseInt(document.getElementById("txtAantalKinderen").value.trim(), 10);
};

const voegPersoonToeAanLijstInUserInterface = (persoon, index) => {
    const lstPersonen = document.getElementById("lstPersonen");
    const option = document.createElement("option");
    option.text = persoon.voornaam + " " + persoon.familienaam;
    option.setAttribute("data-index", index.toString());
    lstPersonen.appendChild(option);
};

const updatePersoonInLijstInUserInterface = (index, persoon) => {
    const lstPersonen = document.getElementById("lstPersonen");
    const option = lstPersonen.options[index];
    option.text = persoon.voornaam + " " + persoon.familienaam;
};

const bewerkHuidigePersoon = (event) => {
    const select = event.target;
    const selectedOption = select.options[select.selectedIndex];
    const index = parseInt(selectedOption.getAttribute("data-index"));


    huidigeIndex = index;
    const persoon = personen[index];

    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
};
