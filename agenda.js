import List from "./list.js";

export default class Agenda {
    constructor() {
        this._contacts = [];
    }

    get contacts() {
        return this._contacts;
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

        return objContact;
    }

    getContacts() {
        let contacts = JSON.parse(localStorage.getItem("contacts"));
        this._contacts = contacts;
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
            return a.age - b.age;
        });

        return this._contacts;
    }

    findContact(contact) {
        let foundAt = -1;
        this._contacts.forEach((e, index) => {
            if (e.name === contact.name && e.email === contact.email) {
                foundAt = index;
                return;
            }
        });

        return foundAt;
    }

    deleteContact(contact) {
        let index = this.findContact(contact);
        this._contacts.splice(index, 1);
        localStorage.setItem("contacts", JSON.stringify(this._contacts));
    }
}