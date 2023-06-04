export class User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  token: string;

  constructor(data: any) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.username = data.username;
    this.email = data.email;
    this.token = data.token;
  }
}
