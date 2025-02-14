const setup = () => {
    document.getElementById('btnBullets').addEventListener('click', bullets);
    document.getElementById('btnNoBullets').addEventListener('click', noBullets);
}

const bullets = () => {
    let list = document.getElementById('list');
    list.className = "btnBullets"
}

const noBullets = () => {
    let list = document.getElementById('list');
    list.className = "btnNoBullets"
}
window.addEventListener("load", setup);