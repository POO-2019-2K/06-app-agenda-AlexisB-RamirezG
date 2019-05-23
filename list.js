export default class List {
    constructor(tableAgenda) {
        this._tableAgenda = tableAgenda;
        this._contacts = [];
        this._numberContacts = 0;
        this._sorts = 0;
    }

    addToList(contact) {
        this._contacts.push(contact);
        this._addToTable(contact);
    }

    _addToTable(contact) {
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

        this._numberContacts++;
    }

    _clearTable() {
            for (let i = 0; i < this._numberContacts; i++) {
                this._tableAgenda.deleteRow(-1);
            }
            this._contacts = [];
            this._numberContacts = 0;
    }

    sortByName(contacts) {
        console.log(this._numberContacts);
        this._clearTable();
        console.log(this._numberContacts);
        this._sorts++;
        this._contacts = contacts;
        console.log(this._numberContacts);
        this._contacts.sort(function (a, b) {
            var nameA = a.name.toLowerCase(),
                nameB = b.name.toLowerCase()
            if (nameA < nameB) {
                return -1
            }
            if (nameA > nameB) {
                return 1
            }
            return 0
        });
        this._contacts.forEach((e, index) => {
            this._addToTable(e);
        });
    }

    sortByAge(contacts) {
        this._clearTable();
        this._sorts++;
        this._contacts = contacts;
        this._contacts.sort(function (a, b) {
            return b.age - a.age
        });
        this._contacts.forEach((e, index) => {
            this._addToTable(e);
        });
    }
}