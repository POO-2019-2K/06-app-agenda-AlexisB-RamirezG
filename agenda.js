import Contact from "./contact.js";
import List from "./list.js";

class Agenda {
    constructor() {
        let list = new List();

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");

            if (form.checkValidity() === true) {
                let name = document.querySelector("#name").value;
                let birthday = document.querySelector("#date").value;
                birthday = birthday.split("-");
                let bDate = new Date(birthday[0], birthday[1], birthday[2]);
                let email = document.querySelector("#email").value;

                let objContact = {
                    name: name,
                    birthday: bDate,
                    email: email
                }
                console.log(objContact);
                new Contact(objContact);
            }

            form.classList.add("was-validated");
        });
    }
}

new Agenda();