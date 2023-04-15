export class User {
  id: string;
  nickName: string;
  password: string;
  phone: number;
  token: string;
  createAt: string;
  updateAt: string;

  constructor(
    id: string,
    nickName: string,
    password: string,
    phone: number,
    token: string,
  ) {
    this.id = id;
    this.nickName = nickName;
    this.password = password;
    this.phone = phone;
    this.token = token;
  }
}
