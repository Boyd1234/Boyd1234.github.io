const setup = () => {
    let btnVoegtoe = document.getElementById("btnVoegToe");
    btnVoegtoe.addEventListener("click", voegToe);
}

const voegToe = () => {
    let txtInput = document.getElementById("txtInput");
    let url = txtInput.value;
    let divImages = document.getElementById("divImages");
    divImages.innerHTML += "<img src='"+url+"'/>";
    txtInput.value = "";
}
window.addEventListener("load", setup);