const setup = () => {
    let input = document.getElementById('input');
    let btnConsole = document.getElementById('btnConsole');

    // functie bij die toConsole want anders staat hij direct bij setup
    btnConsole.addEventListener('click',() => toConsole(input));
}

const toConsole = (input) => {
    let text = input.value;
    console.log("before: " + text);
    text = text.replaceAll("de", "het");
    console.log("after: " + text);
};

window.addEventListener("load", setup);
