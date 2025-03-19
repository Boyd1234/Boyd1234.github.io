const setup = () => {
    let input = document.getElementById('input');
    let btnConsole = document.getElementById('btnConsole');

    btnConsole.addEventListener('click', () => toConsole(input));
}

const toConsole = (input) => {
    let text = input.value;
    console.log("before: " + text);

    // split splitst de tekst zonder de de en join voegt ze weer samen met het
    let newText = text.split("de").join("het");

    console.log("after: " + newText);
};
window.addEventListener("load", setup);
