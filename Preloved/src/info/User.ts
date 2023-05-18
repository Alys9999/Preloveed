//Store all information about this user
//MUST HAVE: username
export class User {
  username: string;
  email: string | undefined;
  avatar: string | undefined;
  address: string | undefined;
  phoneNumber: string | undefined;
  post: string[] | undefined; //only store the id of each posts
  savedItems: string[] | undefined; //only store the id of each posts

  constructor(
    username: string,
    email?: string,
    avatar?: string,
    address?: string,
    phoneNumber?: string,
    post?: string[],
    savedItems?: string[],
  ) {
    this.username = username;
    this.email = email;
    this.avatar = avatar;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.post = post;
    this.savedItems = savedItems;
  }
}
