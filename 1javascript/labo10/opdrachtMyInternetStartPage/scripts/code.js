

const setup = () => {
    document.getElementById("btnGo").addEventListener("click", btnGoFunctie);
    laadFieldsIn();
}

const btnGoFunctie = () => {
    let inputField = document.getElementById("inputField").value;
    let prefix = inputField.substring(0,2);
    let suffix = inputField.substring(3);
    console.log(inputField);
    console.log(suffix);

    let regex = inputField.match("\/(g|x|y|i) [a-z]*");
    if(regex!=null){
        let card = createElementWithClassName("div","card");
        let cardtitle = createElementWithClassNameAndText("h5","card-title", getWelkeSite(prefix, card, suffix));
        let cardtext = createElementWithClassNameAndText("p","card-text", suffix);
        let a = createLinkButton(getUrl(prefix, suffix));
        makeElements(card, cardtitle, cardtext, a);
        saveFields(prefix, suffix);
    } else {
        alert("Invalid command");
    }
}
const getWelkeSite = (prefix, card, suffix) => {
    if(prefix==="/g"){
        card.className += " google-card";
        google(suffix);
        return "Google";

    }
    if(prefix==="/y"){
        card.className += " youtube-card";
        youtube(suffix);
        return "Youtube";
    }
    if(prefix==="/x"){
        card.className += " twitter-card";
        twitter(suffix);
        return "Twitter";
    }
    if(prefix==="/i"){
        card.className += " instagram-card";
        instagram(suffix);
        return "Instagram";
    }
}
const google = (suffix) => {
    let href = "https://www.google.com/search?q=";
    href += suffix;
    href = href.replaceAll(" ","+");
    openSearch(href);
}

const youtube = (suffix) => {
    let href = "https://www.youtube.com/results?search_query="
    href += suffix
    href = href.replaceAll(" ","+");
    openSearch(href);
}

const twitter = (suffix) => {
    let href = "https://x.com/hashtag/"
    href += suffix
    href = href.replaceAll(" ","+");
    openSearch(href);
}

const instagram = (suffix) => {
    let href = "https://www.instagram.com/explore/tags/"
    let url = href + suffix;
    url = url.replaceAll(" ","+");
    console.log("hallo");
    openSearch(url);
}

const getUrl = (prefix, suffix) => {
    let href;
    if (prefix === "/g") {
        href = "https://www.google.com/search?q=";
    } else if (prefix === "/y") {
        href = "https://www.youtube.com/results?search_query=";
    } else if (prefix === "/x") {
        href = "https://x.com/hashtag/";
    } else if (prefix === "/i") {
        href = "https://www.instagram.com/explore/tags/";
    }
     return href + suffix.replaceAll(" ", "+");
}

const openSearch = (url) => {
    window.open(url, "_blank");
}

const makeElements = (card, cardtitle, cardtext, a) => {
    let row = document.getElementsByClassName("row")[0];
    let col = createElementWithClassName("div","col-4");
    let cardbody = createElementWithClassName("div","card-body");
    appendElements(row, col, card, cardbody, cardtitle, cardtext, a)
}

const appendElements = (row, col, card, cardbody, cardtitle, cardtext, a) => {
    row.appendChild(col);
    col.appendChild(card);
    card.appendChild(cardbody);
    cardbody.appendChild(cardtitle);
    cardbody.appendChild(cardtext);
    cardbody.appendChild(a);
}

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};

const createElementWithClassNameAndText = (element, className, text) => {
    let e = document.createElement(element);
    e.appendChild(document.createTextNode(text));
    return e
}

const createLinkButton = (url) => {
    let linkGo = document.createElement("a");
    linkGo.setAttribute("href", url);
    linkGo.setAttribute("target","_blank")
    linkGo.setAttribute("class","btn btn-primary")
    linkGo.appendChild(document.createTextNode("Go!"))
    return linkGo;
}

const saveFields = (prefix, suffix) => {
    let fields = [];
    let velden = localStorage.getItem("myinternetstartpage")
    if(velden){
        fields = JSON.parse(velden);
    }
    fields.push({prefix: prefix, suffix: suffix});
    let json = JSON.stringify(fields);
    localStorage.setItem("myinternetstartpage", json);
}
const laadFieldsIn = () => {
    let fields = [];
    let velden = localStorage.getItem("myinternetstartpage");
    if (velden) {
        let teLadenVelden = JSON.parse(velden);
        for (let i = 0; i < teLadenVelden.length; i++) {
            let item = teLadenVelden[i];
            let card = createElementWithClassName("div","card");
            let cardtitle = createElementWithClassNameAndText("h5","card-title", getWelkeSite(item.prefix, card, item.suffix));
            let cardtext = createElementWithClassNameAndText("p","card-text", item.suffix);
            let a = createLinkButton(getUrl(item.prefix, item.suffix));
            makeElements(card, cardtitle, cardtext, a);
            fields.push({prefix: item.prefix, suffix: item.suffix});
        }
    }
}

window.addEventListener("load", setup);