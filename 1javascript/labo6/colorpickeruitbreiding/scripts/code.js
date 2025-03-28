const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    document.getElementById("btnSave").addEventListener("click", saveColor);
    update();
};

const update = () => {
    let valueRed = document.getElementById("sldRed").value;
    let valueGreen = document.getElementById("sldGreen").value;
    let valueBlue = document.getElementById("sldBlue").value;

    document.getElementById("lblRed").innerHTML = valueRed;
    document.getElementById("lblGreen").innerHTML = valueGreen;
    document.getElementById("lblBlue").innerHTML = valueBlue;

    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = `rgb(${valueRed}, ${valueGreen}, ${valueBlue})`;
};

const saveColor = () => {
    let swatch = document.getElementById("swatch");
    let divColors = document.getElementById("divColor");
    let btnDelete = document.createElement("button")
    let obj = document.createElement("div");
    obj.style.backgroundColor = swatch.style.backgroundColor;
    obj.style.position = "relative";
    obj.style.width = "70px";
    obj.style.height = "70px";
    obj.style.margin = "5px";
    obj.style.display = "inline-block";

    btnDelete.textContent = "x";
    btnDelete.style.position = "absolute"; btnDelete.style.top = "2px"; btnDelete.style.right = "2px";

    divColors.appendChild(obj);
    obj.appendChild(btnDelete);

    btnDelete.addEventListener("click", deleteColor)
};

const deleteColor = (event) => {
    event.target.parentElement.remove()
}

window.addEventListener("load", setup);
