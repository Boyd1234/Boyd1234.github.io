/*const setup = () => {
    let redSlider = document.getElementById("sldRed");
    let greenSlider = document.getElementById("sldGreen");
    let blueSlider = document.getElementById("sldBlue");

    redSlider.addEventListener("input", update);
    greenSlider.addEventListener("input", update);
    blueSlider.addEventListener("input", update);

    update();

}
*/
const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for(let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    update();
}

const update = () => {
    let valueRed = document.getElementById("sldRed").value;
    let valueGreen = document.getElementById("sldGreen").value;
    let valueBlue = document.getElementById("sldBlue").value;

    document.getElementById("lblRed").innerHTML = valueRed;
    document.getElementById("lblGreen").innerHTML = valueGreen;
    document.getElementById("lblBlue").innerHTML = valueBlue;

    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = `rgb(${valueRed}, ${valueGreen}, ${valueBlue})`;
}


window.addEventListener("load", setup);