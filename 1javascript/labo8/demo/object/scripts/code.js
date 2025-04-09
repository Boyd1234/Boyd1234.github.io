const setup = () => {
    let student = {}; // een leeg object
    student.firstName = "John";
    student.lastName = "Doe";
    student.age = new Date (2000,1,1);
    student.eyeColor = "blue";

    let student1 = {
        firstName: "John",
        lastName: "Doe",
        age: new Date (2000,1,1),
        eyeColor: "blue"
    };

    let student2={
        firstName: "John",
        lastName: "Doe",
        address:{
            zipcode: 8500,
            city: "kortrijk"
        }
    }
    let students = [
        {
            firstName: "John",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        },
        {
            firstName: "VIVES",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        }
    ];

    console.log (student.firstName);

    let text = JSON.stringify(student1);
    console.log(text);

    console.log(student2.address.zipcode)

    //omzetten script-object naar een JSON-object
    let tekst = JSON.stringify(students);
    console.log(tekst);

    //omzetten JSON-object naar script-object
    let tekstJS = JSON.parse(tekst);
    console.log("JsonParse " + tekstJs[0].firstName)
}
window.addEventListener("load", setup);