import Agenda from "./agenda.js";

export default class List {
    constructor(tableAgenda) {
        this._tableAgenda = tableAgenda;
        this._contacts = [];
    }

    addToTable(contact) {
        let row = this._tableAgenda.insertRow(-1);

        let cellName = row.insertCell(0);
        let cellBirthday = row.insertCell(1);
        let cellEmail = row.insertCell(2);
        let cellAge = row.insertCell(3);

        cellName.innerHTML = contact.name;
        cellBirthday.innerHTML = contact.stringBD;
        cellEmail.innerHTML = contact.email;
        cellAge.innerHTML = contact.age;
    }
}