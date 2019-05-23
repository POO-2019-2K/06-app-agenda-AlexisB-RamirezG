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
}