const setup = () => { //const is functie
    let lblCursus = document.getElementById("lblCursus"); //zoekt naar element. let is variabele (geen type, pas bij toekenning)
    //lblCursus.className = "cursus"; Kent klasse cursus toe aan variabele, wat gebeurd staat in css file
    lblCursus.addEventListener("mouseover", change); //change word functie hieronder gemaakt

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);
}

const change = () =>{
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}

const show = () =>{
    console.log("show"); // dit is puur om te weten als je in functie geraakt (debugging)
    let txtName = document.getElementById("txtName");
    if(txtName.value != ""){
        alert("jouw naam is " + txtName.value); // dit is voor op scherm

        console.log("Jouw naam is " + txtName.value);


        console.log(`Jouw naam is ${txtName.value}`); // `` voor de string en die ${} voor de value die je ergens uit haalt. Dit is voor in console in browser
    } else {
        alert("gelieve naam in te vullen");
    }
    
}
window.addEventListener("load", setup);
