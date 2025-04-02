let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    KAARTEN: ["/images/kaart1.png", "/images/kaart2.jpg", "/images/kaart3.jpg", "/images/kaart4.jpg", "/images/kaart5.jpg", "/images/kaart6.jpg"],
    ACHTERKANT: "images/achterkant.png";
    ISBEZIG: false,
    OMGEDRAAIDE_KAARTEN: [],
    timeoutId: 0,
    MATCHING_CARDS: 0
};

const setup = () => {
    bouwElementen();
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        let img = cards[i].firstElementChild;
        img.addEventListener("click", turnCard);
    }
}

const bouwElementen = () => {
    let canvas = document.createElement("div");
    canvas.id = "canvas";
    document.body.appendChild(canvas);

    for (let i = 0; i < 12; i++) {
        let card = document.createElement("div");
        card.className = "card";
        canvas.appendChild(card);

        let img = document.createElement("img");
        img.src = global.ACHTERKANT;
        card.appendChild(img);
    }

};

const getRandom = () => {
    return Math.floor(Math.random() * 6);
};

const turnCard = (e) => {
    if (!global.ISBEZIG || global.OMGEDRAAIDE_KAARTEN.length === 0) {
        let card = e.target;
        card.src = global.KAARTEN[getRandom()];
        global.OMGEDRAAIDE_KAARTEN.push(card); // geselecteerde kaart in de array steken
    }
    if (global.OMGEDRAAIDE_KAARTEN.length === 2) {
        global.ISBEZIG = true; // 2 kaarten geselecteerd, nu nog controleren.
        controleer();
    }
};
const controleer = () => {
    let card1 = global.OMGEDRAAIDE_KAARTEN[0];
    let card2 = global.OMGEDRAAIDE_KAARTEN[1];
    if (card1.src === card2.src) {
        global.MATCHING_CARDS += 2;
        if (global.MATCHING_CARDS === (global.AANTAL_KAARTEN * 2)) {
            setTimeout(() => {
                alert("Je hebt alle kaarten gevonden. Gefeliciteerd!")
            }, 500)
        }
        card1.classList.add("correct");
        card2.classList.add("correct");
        //removeCardInterval();
        setTimeout(() => {
            card1.parentElement.style.display = "none";
            card2.parentElement.style.display = "none";
        }, 1000)
    } else {
        setTimeout(() => {
            card1.src = global.ACHTERKANT;
            card2.src = global.ACHTERKANT;
        }, 1000)
    }
    global.OMGEDRAAIDE_KAARTEN = [];
    global.ISBEZIG = false;
};


window.addEventListener("load", setup);