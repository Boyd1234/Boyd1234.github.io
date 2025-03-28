const setup = () => {
    let element = document.createElement('p');
    element.setAttribute('class', 'color');
    element.setAttribute('id', 'txtPar');

    console.log(element.getAttribute('class'));

    let textNode = document.createTextNode("Hello world!"); //create a TextNode
    element.appendChild(textNode);//voeg TextNode toe aan de paragraaf
    document.querySelector("#myDiv").appendChild(element); // koppelen aan htm
}
window.addEventListener("load", setup);