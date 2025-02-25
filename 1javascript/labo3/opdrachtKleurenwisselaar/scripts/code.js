const setup = () => {
    let buttons = document.getElementsByTagName('button')
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            buttons[i].classList.toggle('active') // toggle de class 'active' dus aan/uit.
        });
    }
}
window.addEventListener("load", setup);