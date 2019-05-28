export default class List {
    constructor(tableAgenda) {
        this._tableAgenda = tableAgenda;
        this._agenda = null;
        this._numberContacts = 0;
        //this._order = "normal";
    }

    set agenda(agenda) {
        this._agenda = agenda;
    }

    addToList(contact) {
        this._addToTable(contact);
    }

    _addToTable(contact, index) {
        let row = this._tableAgenda.insertRow(-1);

        let cellName = row.insertCell(0),
        cellBirthday = row.insertCell(1),
        cellEmail = row.insertCell(2),
        cellAge = row.insertCell(3),
        cellDelete = row.insertCell(4),
        nameText = document.createTextNode(contact.name),
        birthdayText = document.createTextNode(contact.stringBD),
        emailText = document.createTextNode(contact.email),
        ageText = document.createTextNode(contact.age);
        
        cellName.appendChild(nameText);
        cellBirthday.appendChild(birthdayText);
        cellEmail.appendChild(emailText);
        cellAge.appendChild(ageText);

        let deleteButton = document.createElement("input");
        deleteButton.type = "button";
        deleteButton.value = "Delete";
        deleteButton.className = "btn";
        deleteButton.id = "btnDelete";
        deleteButton.addEventListener("click", () => {
            this._agenda.deleteContact(contact);
            this._clearTable();
            this.printContacts();
        });
        cellDelete.appendChild(deleteButton);
        this._numberContacts++;
    }

    _clearTable() {
        for (let i = 0; i < this._numberContacts; i++) {
            this._tableAgenda.deleteRow(-1);
        }
        this._numberContacts = 0;
    }

    printOrderByName() {
        this._clearTable();
        this._agenda.sortByName().forEach((e, index) => {
            this._addToTable(e, index);
        });
        //this._order = "name";
    }

    printOrderByAge() {
        this._clearTable();
        this._agenda.sortByAge().forEach((e, index) => {
            this._addToTable(e, index);
        });
        //this._order = "age";
    }

    printContacts() {
        this._clearTable();
        this._agenda.contacts.forEach((e, index) => {
            this._addToTable(e, index);
        });
        //this._order = "normal";
    } 
}