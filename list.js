export default class List {
    constructor(tableAgenda) {
        this._tableAgenda = tableAgenda;
        this._agenda = null;
        this._numberContacts = 0;
        this._order = "normal";
        // this._order keeps the order value even after refresh
    }

    set agenda(agenda) {
        this._agenda = agenda;
    }

    addToList(contact) {
        this._addToTable(contact);
    }

    contactAdded(contact) {
        this._addToTable(contact);
        window.Swal.fire({
            type: "success",
            title: "Contact added!",
        });
        this._order = "normal";
        this._saveOrder();
    }

    _deleteButtonAtributes(deleteButton, contact) {
        deleteButton.type = "button";
        deleteButton.value = "Delete";
        deleteButton.className = "btn";
        deleteButton.id = "btnDelete";

        deleteButton.addEventListener("click", () => {
            window.Swal.fire({
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
                    window.Swal.fire({
                        type: "success",
                        title: "Contact deleted!",
                    });
                }
            });
        });
    }

    _addToTable(contact, index) {
        let row = this._tableAgenda.insertRow(-1),
            cell = row.insertCell(0),
            deleteButton = document.createElement("input");

        this._deleteButtonAtributes(deleteButton, contact);

        cell.appendChild(document.createTextNode(contact.name));
        cell = row.insertCell(1);
        cell.appendChild(document.createTextNode(contact.stringBD));
        cell = row.insertCell(2);
        cell.appendChild(document.createTextNode(contact.email));
        cell = row.insertCell(3);
        cell.appendChild(document.createTextNode(contact.age));
        cell = row.insertCell(4);
        cell.appendChild(deleteButton);

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

    // Print the table as it was before refresh
    printOrdered() {
        this.getOrder();
        this.printContacts();
    }

    // Save the order atributte in LS
    _saveOrder() {
        localStorage.setItem("order", JSON.stringify(this._order));
    }

    // Get the order atributte value from LS
    getOrder() {
        this._order = JSON.parse(localStorage.getItem("order"));
    }
}