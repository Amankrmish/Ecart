"use strict";
class Customer {
    constructor(theFirstName, thelastName) {
        this.firstName = theFirstName;
        this.lastName = thelastName;
    }
}
// //creating instance
let myCustomer = new Customer("Aman", "Kumar");
// myCustomer.firstName="Aman";
// myCustomer.lastName="Kumar"
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
