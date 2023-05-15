export class User {
  username: string | undefined;
  email: string | undefined;
  avatar: string | undefined;
  address: string | undefined;
  phoneNumber: string | undefined;

  constructor(
    username?: string,
    email?: string,
    avatar?: string,
    address?: string,
    phoneNumber?: string
  ) {
    this.username = username;
    this.email = email;
    this.avatar = avatar;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
}
