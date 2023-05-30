export class User {
  firstName: string;
  lastName: string;
  username: string;
  email: string;

  constructor(data: any) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.username = data.username;
    this.email = data.email;
  }
}
