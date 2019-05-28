import Contact from "./contact.js";
import List from "./list.js";
import Agenda from "./agenda.js";

class Main {
    constructor() {
        let tableAgenda = document.querySelector("#agenda");
        let list = new List(tableAgenda);
        let agenda = new Agenda();

        agenda.getContacts();
        
        list.agenda = agenda; 

        list.printContacts();

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");

            if (form.checkValidity() === true) {
                let name = document.querySelector("#name").value,
                birthday = document.querySelector("#date").value,
                bDate = new Date(birthday[0], birthday[1], birthday[2]),
                email = document.querySelector("#email").value;

                birthday = birthday.split("-");

                let objContact = {
                    name,
                    birthday: bDate,
                    email
                };

                let contact = new Contact(objContact),
                stringContactBD = contact.getBirthDateString(),
                contactAge = contact.getAge();

                let contactToTable = agenda.addContact(contact, stringContactBD, contactAge);
                list.addToList(contactToTable);
            }

            form.classList.add("was-validated");
        });

        document.querySelector("#btnName").addEventListener("click", () => {
            list.printOrderByName();
        });

        document.querySelector("#btnAge").addEventListener("click", () => {
            list.printOrderByAge();
        });
    }
}

let main = new Main();