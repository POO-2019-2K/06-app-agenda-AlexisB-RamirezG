import Contact from "./contact.js";
import List from "./list.js";
import Agenda from "./agenda.js";

class Main {
    constructor() {
        let list = new List();
        let agenda = new Agenda();

        lista.mostrar(agenda.getContactos())
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
                
                let contact = new Contact(objContact);
                agenda.addContact(contact);
            }

            form.classList.add("was-validated");
        });
    }
}

new Main();