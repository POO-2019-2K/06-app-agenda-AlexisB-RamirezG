export default class Contact {
    constructor(contact) {
        this._name = contact.name;
        this._birthday = contact.birthday;
        this._email = contact.email;
        this._age = 0;
    };

    get name() {
        return this._name;
    }

    get birhtday() {
        return this._birthday;
    }

    get email() {
        return this._email;
    }

    
}