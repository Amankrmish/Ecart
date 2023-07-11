class CustomerAccess {
  private _firstName: string;
  private _lastName: string;

  constructor(theFirstName: string, thelastName: string) {
    this._firstName = theFirstName;
    this._lastName = thelastName;
  }
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
}
// //creating instance
let myCustomeracess = new CustomerAccess("Aman", "Kumar");
// myCustomer.lastName="Kumar"
console.log(myCustomeracess.firstName);
console.log(myCustomeracess.lastName);
