export class LoginReponseDto {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;

  constructor(data: any) {
    this.username = data.username;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.token = data.token;
  }
}
