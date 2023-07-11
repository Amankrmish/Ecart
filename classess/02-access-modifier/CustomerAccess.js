"use strict";
class CustomerAccess {
    constructor(theFirstName, thelastName) {
        this._firstName = theFirstName;
        this._lastName = thelastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
// //creating instance
let myCustomeracess = new CustomerAccess("Aman", "Kumar");
// myCustomer.lastName="Kumar"
console.log(myCustomeracess.firstName);
console.log(myCustomeracess.lastName);
