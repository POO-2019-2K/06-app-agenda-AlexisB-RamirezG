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

        let cellName = row.insertCell(0),
        cellBirthday = row.insertCell(1),
        cellEmail = row.insertCell(2),
        cellAge = row.insertCell(3),
        cellDelete = row.insertCell(4);

        let nameText = document.createTextNode(contact.name);
        cellName.appendChild(nameText);

        let birthdayText = document.createTextNode(contact.stringBD);
        cellBirthday.appendChild(birthdayText);

        let emailText = document.createTextNode(contact.email);
        cellEmail.appendChild(emailText);

        let ageText = document.createTextNode(contact.age);
        cellAge.appendChild(ageText);

        let deleteButton = document.createElement("input");
        deleteButton.type = "button";
        deleteButton.value = "Delete";
        deleteButton.className = "btn";
        deleteButton.id = "btnDelete";
        deleteButton.addEventListener("click", () => {
        });
        cellDelete.appendChild(deleteButton);
        this._numberContacts++;
    }

    _clearTable() {
        for (let i = 0; i < this._numberContacts; i++) {
            this._tableAgenda.deleteRow(-1);
        }
        this._contacts = [];
        this._numberContacts = 0;
    }

    printSorted(contacts) {
        this._clearTable();
        this._sorts++;
        this._contacts = contacts;
        this._contacts.forEach((e, index) => {
            this._addToTable(e);
        });
    } 
}