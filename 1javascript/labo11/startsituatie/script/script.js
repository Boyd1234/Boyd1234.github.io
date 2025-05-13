const likedMovies = []; // Gebruik een array om gelikete films bij te houden

const setup = () => {
    console.log("setup");
    movies.forEach(movie => {
        let divisionMovies = document.getElementById("movielist");

        let divMovie = document.createElement("div");
        divMovie.className = "movie";

        let title = document.createElement("p");
        title.className = "title";

        let button1 = createIconButton("fas fa-thumbs-up", "unset likebutton", (event) => {
            like(movie.id, movie.title, event.target)
        });

        let button2 = createIconButton("fas fa-thumbs-down", "unset dislikebutton", (event) => {
            dislike(movie.title, event.target)
        });

        let image = document.createElement("img");
        let description = document.createElement("span");

        title.textContent = movie.title;
        image.setAttribute("src", movie.imageUrl);
        description.textContent = movie.description;

        divMovie.appendChild(title);
        divMovie.appendChild(button1);
        divMovie.appendChild(button2);
        divMovie.appendChild(image);
        divMovie.appendChild(description);

        divisionMovies.appendChild(divMovie);
    });
}

const deleteUitList = (event) => {
    let e = event.parentElement.parentElement;
    e.remove();
    let likebutton = document.getElementById("like");
    let currentLikes = parseInt(likebutton.textContent);
    if(currentLikes - 1 < 0) {
        likebutton.textContent = 0;
    } else {
        likebutton.textContent = currentLikes - 1;
    }
    likebutton.classList.remove("groen");
}

const like = (id, title, event) => {
    console.log("like");

    const likebutton = document.getElementById("like");
    let currentLikes = parseInt(likebutton.textContent) || 0;

    const dislikeBtn = event.parentElement.parentElement.querySelectorAll("a")[1].children[0];

    // Verwijder eventuele dislike eerst
    if (dislikeBtn.classList.contains("rood")) {
        dislikeBtn.classList.remove("rood");
        undislike();
    }

    // Controleer of deze film al in de likedMovies zit
    const index = likedMovies.indexOf(title);

    if (index > -1) {
        // Film was al geliket → verwijder
        likedMovies.splice(index, 1);
        event.classList.remove("groen");
        deleteLikedMovieFromSidebar(title);
        currentLikes--;
    } else {
        // Film nog niet geliket → voeg toe
        likedMovies.push(title);
        event.classList.add("groen");
        sidebar(id, title);
        currentLikes++;
    }

    likebutton.textContent = Math.max(0, currentLikes);
}


const undislike = () =>{
    let dislikebutton = document.getElementById("dislike");
    let currentLikes = parseInt(dislikebutton.textContent);
    currentLikes = currentLikes - 1;
    if (isNaN(currentLikes)) currentLikes = 0;
    dislikebutton.textContent = currentLikes < 0 ? 0 : currentLikes;
}
const dislike = (title, event) => {
    console.log("dislike");

    const dislikebutton = document.getElementById("dislike");
    let currentDislikes = parseInt(dislikebutton.textContent) || 0;

    const likeBtn = event.parentElement.parentElement.querySelectorAll("a")[0].children[0];

    // Verwijder like als die actief was
    if (likeBtn.classList.contains("groen")) {
        likeBtn.classList.remove("groen");
        unlike();
        // Verwijder uit likedMovies
        const index = likedMovies.indexOf(title);
        if (index > -1) {
            likedMovies.splice(index, 1);
            deleteLikedMovieFromSidebar(title);
        }
    }

    // Toggle dislike
    if (event.classList.contains("rood")) {
        event.classList.remove("rood");
        currentDislikes--;
    } else {
        event.classList.add("rood");
        currentDislikes++;
    }

    dislikebutton.textContent = Math.max(0, currentDislikes);
}


const unlike = () => {
    let likebutton = document.getElementById("like");
    let currentLikes = parseInt(likebutton.textContent);
    currentLikes--;
    if (isNaN(currentLikes)) currentLikes = 0;
    likebutton.textContent = currentLikes < 0 ? 0 : currentLikes;
}

const deleteLikedMovieFromSidebar = (title) => {
    let divLikebar = document.getElementById("likebar");
    for (let i = 0; i < divLikebar.children.length; i++) {
        const likedMovieDiv = divLikebar.children[i];
        const titleElement = likedMovieDiv.querySelector("p");

        if (titleElement && titleElement.textContent === title) {
            likedMovieDiv.remove();
            break;
        }
    }
}

const sidebar = (id, title) => {
    let divLikebar = document.getElementById("likebar");
    divLikebar.style.visibility = "visible";

    let div = document.createElement("div");
    let titel = document.createElement("p");
    titel.textContent = title;
    let btnDel = createIconButton("fas fa-trash", "button", (event) => {
        deleteUitList(event.target);
    });

    div.appendChild(titel);
    div.appendChild(btnDel);
    divLikebar.appendChild(div);
}

const createElement = (tag, className = "", textContent = "") => {
    const el = document.createElement(tag);
    if (className) {
        className.split(" ").forEach(cls => el.classList.add(cls));
    }
    if (textContent) el.textContent = textContent;
    return el;
};

const createIconButton = (iconClass, buttonClass, onClick) => {
    const button = createElement("a", buttonClass);
    const icon = createElement("i", iconClass);
    button.appendChild(icon);
    button.addEventListener("click", (event)=>{
        console.log("icon " + event.parentElement);
        onClick(event);
    });
    return button;
};

window.addEventListener('load', setup);
