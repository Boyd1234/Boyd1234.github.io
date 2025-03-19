const setup = () => {
    let breedte = document.getElementById('breedte');
    let hoogte  = document.getElementById('hoogte');
    let kleur = document.getElementById('kleur');
    let rechts = document.getElementById('rechts');
    document.getElementById('btnBeweeg').addEventListener('click', () => beweeg(rechts))
    document.getElementById('btnSubmit').addEventListener('click', () => change(breedte, hoogte, kleur));
}

const change = (breedte, hoogte, kleur) => {
    let divOutput = document.getElementById('divOutput');
    let hoogteValue = parseInt(hoogte.value);
    let breedteValue = parseInt(breedte.value);
    divOutput.style.height = hoogteValue + "px";
    divOutput.style.width = breedteValue + "px";
    divOutput.style.backgroundColor = `${kleur.value}`;
}

const beweeg = (rechts) => {
    let divOutput = document.getElementById('divOutput');
    let beweegValue = parseInt(rechts.value);
    let deler = 20
    beweegValue /= deler;
    console.log(beweegValue)
    divOutput.style.position = "absolute";
    for(let i = 0; i < deler; i++){
        setTimeout(() => {
            divOutput.style.left = ((i + 1) * beweegValue) + "px";
        }, i * 500);
    }
    divOutput.style.left=  beweegValue + "px";
}
window.addEventListener("load", setup);