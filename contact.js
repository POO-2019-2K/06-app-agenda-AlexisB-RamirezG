export default class Contact {
    constructor(contact) {
        this._name = contact.name;
        this._birthday = contact.birthday;
        this._email = contact.email;
        this._age = 0;
    }

    get name() {
        return this._name;
    }

    get birhtday() {
        return this._birthday;
    }

    get email() {
        return this._email;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = age; 
    }

    getBirthDateString() {
        let date =
            this._birthday.getDate() +
            "/" +
            this._birthday.getMonth() +
            "/" +
            this._birthday.getFullYear();

        return date;
    }

    getAge() {
    let Day = 24 * 60 * 60 * 1000;
    let oneYear = Day * 365;
    let differenceMs = new Date() - this._birthday;
    let age = Math.trunc(differenceMs / oneYear);

    return age;
    }
}