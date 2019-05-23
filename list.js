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

        let nameText = document.createTextNode(contact.name);
        cellName.appendChild(nameText);

        let birthdayText = document.createTextNode(contact.stringBD);
        cellBirthday.appendChild(birthdayText);

        let emailText = document.createTextNode(contact.email);
        cellEmail.appendChild(emailText);

        let ageText = document.createTextNode(contact.age);
        cellAge.appendChild(ageText);

        this._contacts.push(contact);
    }
}