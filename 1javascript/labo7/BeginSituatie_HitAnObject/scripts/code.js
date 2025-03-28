let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: null // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    document.getElementById("btnStart").addEventListener("click", startSpel)
};

const startSpel = () => {
    let divPlayField = document.querySelector("#playField");
    let imgPlayField = document.createElement("img");
    imgPlayField.src = global.IMAGE_PATH_PREFIX + Math.round(Math.random()*4) + global.IMAGE_PATH_SUFFIX;
    imgPlayField.alt = "afbeelding";
    divPlayField.appendChild(imgPlayField);
    imgPlayField.addEventListener("click", () => moveImage(imgPlayField))

    imgPlayField.style.position = "absolute";
    imgPlayField.style.top = Math.random() * divPlayField.style.offsetHeight + "px";
    imgPlayField.style.left = Math.random() * divPlayField.style.offsetWidth + "px";
    let testInterval = setInterval(() => moveImage(imgPlayField), 5000)
}

const moveImage = (img) => {
    img.style.top = Math.random() * img.parentElement.parentElement.offsetHeight + "px";
    img.style.left = Math.random() * img.parentElement.parentElement.offsetWidth + "px";

    if(img.src.endsWith(global.IMAGE_PATH_PREFIX + "0" + global.IMAGE_PATH_SUFFIX)===false) {
        global.score++;
    } else {
        clearInterval(global.timeoutId);
        window.alert("BOEM");
    }
    img.src = global.IMAGE_PATH_PREFIX + Math.round(Math.random() * 4) + global.IMAGE_PATH_SUFFIX;
    console.log(global.score)

}


window.addEventListener("load", setup);


