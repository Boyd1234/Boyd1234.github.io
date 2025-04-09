const setup = () => {
    let start = new Date('2025-04-01T12:10:30');
    console.log(start);

    //dag van de week
    console.log(start.getDay())

    //maand (januari is 0 dus + 1 doen)
    console.log(start.getMonth()+1)

    //jaar
    console.log(start.getFullYear())

    console.log(start.getDate() + "-"
        + (start.getMonth() + 1) + "-"
        + start.getFullYear() + " " + start.getHours()
        + ":" + start.getMinutes() + ":" + start.getSeconds());

    let datum = new Date(2025,0,1)
    console.log(datum);

    let event = new Date();
    console.log("toString " + event.toString()); //gebruikt jouw tijdzone

    console.log("toISOString " + event.toISOString()); //houd geen rekening met tijdzone

    console.log("toDateString " + event.toDateString());

    console.log("toTimeString " + event.toTimeString());

    let geboortedatum = new Date(2006,10,24)
    console.log("ik besta al: " + (event - geboortedatum) + " milliseconden");
    console.log("ik besta al: " + (event - geboortedatum)/1000/60/60/24 + " dagen");
}
window.addEventListener("load", setup);