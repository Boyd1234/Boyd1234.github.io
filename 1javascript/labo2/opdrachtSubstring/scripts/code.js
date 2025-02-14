const setup = () => {
    document.getElementById('btnSubstring').addEventListener('click', substring);
}

const substring = () => {
    let txtInput = document.getElementById('txtInput');
    let txtOutput = document.getElementById('txtOutput');
    let numberBegin = document.getElementById('numberBegin');
    let numberEnd = document.getElementById('numberEnd');

    let tekst = txtInput.value;
    let idxBegin = parseInt(numberBegin.value, 10);
    let idxEinde = parseInt(numberEnd.value, 10);

    let resultaatSubString = tekst.substring(idxBegin, idxEinde);
    txtOutput.innerHTML = `het resultaat is ${resultaatSubString}`;
}
window.addEventListener("load", setup);