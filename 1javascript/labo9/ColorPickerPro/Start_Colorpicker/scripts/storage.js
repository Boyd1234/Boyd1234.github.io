

const storeSliderValues = () => {
    let sliders = {};
    let sliderSettings;

    sliders.red = document.getElementById("sldRed").value;
    sliders.green = document.getElementById("sldGreen").value;
    sliders.blue = document.getElementById("sldBlue").value;

    sliderSettings = JSON.stringify(sliders);
    localStorage.setItem("colorpickerpro.sliderSettings", sliderSettings);
};

const restoreSliderValues = () => {
    let sliders = localStorage.getItem("colorpickerpro.sliderSettings");
    let sliderSettings = JSON.parse(sliders);
    document.getElementById("sldRed").value = sliderSettings.red;
    document.getElementById("sldGreen").value = sliderSettings.green;
    document.getElementById("sldBlue").value = sliderSettings.blue;
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let swatches = [];
    let swatchesSettings;

    let alleSwatches = document.getElementById("swatchComponents").children
    for(let i = 0; i < alleSwatches.length; i++) {
        let red = alleSwatches[i].getAttribute("data-red");
        let green = alleSwatches[i].getAttribute("data-green");
        let blue = alleSwatches[i].getAttribute("data-blue");
        swatches.push({red: red, green: green, blue: blue});
    }

    swatchesSettings = JSON.stringify(swatches);
    localStorage.setItem("colorpickerpro.swatchesSettings", swatchesSettings);
};

const restoreSwatches = () => {
    let swatches = localStorage.getItem("colorpickerpro.swatchesSettings");
    let swatchesSettings = JSON.parse(swatches);

    if(swatchesSettings) {
        for(let i = 0; i < swatchesSettings.length; i++) {
            let red = swatchesSettings[i].red;
            let green = swatchesSettings[i].green;
            let blue = swatchesSettings[i].blue;
            addSwatchComponent(red, green, blue);
        }
    }

};
