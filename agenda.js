import List from "./list.js";

export default class Agenda {
    constructor() {
        this._contacts = [];
        this._list = new List();
    }

    addContact(contact, stringBD, age) {        
        let objContact = {
            name: contact.name,
            bDate: contact._birthday,
            email: contact.email,
            stringBD,
            age
        };

        this._contacts.push(objContact);
        console.log(this._contacts);
        localStorage.setItem("contacts", JSON.stringify(this._contacts));

        Swal.fire({
            type: "success",
            title: "Contact added!",
        });

        return objContact;
    }

    getContacts() {
        let contacts = JSON.parse(localStorage.getItem("contacts"));
        this._contacts = contacts;
        console.log(this._contacts);
        return contacts;
    }

    sortByName() {
        this.getContacts();
        this._contacts.sort(function (a, b) {
            let nameA = a.name.toLowerCase(),
                nameB = b.name.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });

        return this._contacts;
    }

    sortByAge() {
        this.getContacts();
        this._contacts.sort(function (a, b) {
            return b.age - a.age
        });

        return this._contacts;
    }
}