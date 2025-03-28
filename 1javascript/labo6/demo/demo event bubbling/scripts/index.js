const setup = () => {
    let uls=document.getElementsByTagName("ul");
    uls[0].addEventListener("click", klik);

    let lis=document.getElementsByTagName("li");
    for (let i=0;i<lis.length;i++) {
        lis[i].addEventListener("click", klik);
    }

    let as=document.getElementsByTagName("a");
    for (let i=0;i<as.length;i++) {
        as[i].addEventListener("click", klik);
    }

};


const klik = (event) => {
    console.log("target is "+event.target.nodeName+", currentTarget is "+event.currentTarget.nodeName); //target is element die eeft veroorzaakt. CurrentTarget is element die het afhandelt
    event.stopPropagation(); //laat de dinges die naar boven gaat stoppen.
};

window.addEventListener("load", setup);