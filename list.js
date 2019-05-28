export default class List {
    constructor(tableAgenda) {
        this._tableAgenda = tableAgenda;
        this._agenda = null;
        this._numberContacts = 0;
        this._order = "normal";
    }

    set agenda(agenda) {
        this._agenda = agenda;
    }

    addToList(contact) {
        this._addToTable(contact);
    }

    contactAdded(contact) {
        this._addToTable(contact);
        Swal.fire({
            type: "success",
            title: "Contact added!",
        });
        this._order = "normal";
        this._saveOrder();
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
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.value) {
                    this._agenda.deleteContact(contact);
                    this.printContacts();
                    Swal.fire({
                        type: "success",
                        title: "Contact deleted!",
                    });
                }
            });
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
        this._order = "name";
        this._saveOrder();
    }

    printOrderByAge() {
        this._clearTable();
        this._agenda.sortByAge().forEach((e, index) => {
            this._addToTable(e, index);
        });
        this._order = "age";
        this._saveOrder();
    }

    printNormalOrder() {
        this._clearTable();
        this._agenda.contacts.forEach((e, index) => {
            this._addToTable(e, index);
        });
        this._order = "normal";
        this._saveOrder();
    }

    printContacts() {
        if (this._order === "normal") {
            this.printNormalOrder();
        } else if (this._order === "name") {
            this.printOrderByName();
        } else if (this._order === "age") {
            this.printOrderByAge();
        }
    }

    printOrdered() {
        this.getOrder();
        this.printContacts();
    }

    _saveOrder() {
        localStorage.setItem("order", JSON.stringify(this._order));
    }

    getOrder() {
        this._order = JSON.parse(localStorage.getItem("order"));
    }
}