const setup = () => {
    document.getElementById("imgPhoto").addEventListener("mouseover", changeImage);
    document.getElementById("imgPhoto").addEventListener("mouseout", changeImage2);
}

const changeImage = () => {
    let txtText = document.getElementById('txtText');
    let photo = document.getElementById('imgPhoto');
    photo.src = "./images/minionkanye.png"
    photo.alt = "minionkanye";
    photo.className = "photos"
    txtText.innerHTML = "foto van minionkanye";
}

const changeImage2 = () => {
    let txtText = document.getElementById('txtText');
    let photo = document.getElementById('imgPhoto');
    photo.src = "./images/Schermafbeeld.png"
    photo.alt = "random dier";
    photo.className = "photos"
    txtText.innerHTML = "random dier";
}
window.addEventListener("load", setup);