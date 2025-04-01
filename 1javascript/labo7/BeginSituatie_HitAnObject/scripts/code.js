let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 3000,
    score: 0,
    timeoutId: null
};

const setup = () => {
    document.getElementById("btnStart").addEventListener("click", startSpel);
};

const startSpel = () => {
    let divPlayField = document.querySelector("#playField");
    let btnStart = document.querySelector("#btnStart");
    divPlayField.removeChild(btnStart);
    let par = document.createElement("p")
    par.textContent = `aantal hits: ${global.score}`;
    divPlayField.appendChild(par);
    let imgPlayField = document.createElement("img");
    imgPlayField.src = global.IMAGE_PATH_PREFIX + Math.round(Math.random() * 4) + global.IMAGE_PATH_SUFFIX;
    imgPlayField.alt = "afbeelding";
    divPlayField.appendChild(imgPlayField);

    imgPlayField.style.position = "absolute";
    imgPlayField.style.top = Math.random() * divPlayField.offsetHeight + "px";
    imgPlayField.style.left = Math.random() * divPlayField.offsetWidth + "px";

    imgPlayField.addEventListener("click", () => {
        if (imgPlayField.src.endsWith("0.png")) {
            clearInterval(global.timeoutId);
            window.alert("GAME OVER");
            global.score = 0;
            par.textContent = `aantal hits: ${global.score}`;
        } else {
            global.score++;
            par.textContent = `aantal hits: ${global.score}`;
        }
        moveImage(imgPlayField);
    });

    global.timeoutId = setInterval(() => moveImage(imgPlayField), 5000);
};

const moveImage = (img) => {
    img.style.top = Math.random() * img.parentElement.offsetHeight + "px";
    img.style.left = Math.random() * img.parentElement.offsetWidth + "px";
    img.src = global.IMAGE_PATH_PREFIX + Math.round(Math.random() * 4) + global.IMAGE_PATH_SUFFIX;
};

window.addEventListener("load", setup);
