const setup = () => {
    window.alert("hello world!");
    let antwoord = window.confirm("bent u zeker")
    let antwoord2 = window.prompt("Wat is uw naam", "Onbekend");
    console.log(antwoord);
    console.log(antwoord2);
}
window.addEventListener("load", setup);