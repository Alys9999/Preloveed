import {User} from "./User";
import Parse from "parse";

export class GenerateData {
  static current_user: User; //Store the current user's data, which should be assigned upon login or signup.
  constructor() {
  }
  static getCurrentUser(): User{
    let username = Parse.User.current()?.getUsername();
    let email = Parse.User.current()?.getEmail();
    let avatar = Parse.User.current()?.get("avatarLink");
    let address = Parse.User.current()?.get("address");
    let phoneNumber = Parse.User.current()?.get("phoneNumber");
    return new User(username, email, avatar, address, phoneNumber);
  }
}
