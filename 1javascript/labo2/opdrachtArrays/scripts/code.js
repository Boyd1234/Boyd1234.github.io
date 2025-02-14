const setup = () => {
    let familieleden = ['eiman','maxamed','boyd', 'eliza','omayma']
    console.log(familieleden.length);
    for(let i=0; i<familieleden.length; i=i+2){
        console.log(familieleden[i]);
    }
    VoegNaamToe(familieleden);
    console.log();

    console.log(familieleden.join(" - "));
}

const VoegNaamToe = (leden) => {
    let nieuwenaam = prompt("Geef een nieuw familielid op",null);
    leden.push(nieuwenaam);
}

window.addEventListener("load", setup);
