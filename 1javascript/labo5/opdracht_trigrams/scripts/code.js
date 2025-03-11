const setup = () => {
    let woord = "onhoorbaar";
    for (let i = 0; i < woord.length; i++) {
        if (woord.slice(i, i + 3).length > 2) {
            console.log(woord.slice(i, i + 3));
        }
    }
}
window.addEventListener("load", setup);