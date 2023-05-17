import {User} from "./User";
import Parse from "parse";
import {save} from "ionicons/icons";
import {PreLovedCard} from "./PreLovedCard";

export class GenerateData {
  /*USER*/
  //Store the current user's data. Be assigned upon login or signup.
  static current_user: User;
  //COLUMN NAME
  static emailColumn: string = "email";
  static addressColumn: string = "address";
  static phoneNumberColumn: string = "phoneNumber";
  static postColumn: string = "post";
  static saveItemColumn: string = "saveItems";
  static avatarColumn: string = "avatarLink";

  /* PreLovedCard */
  //Column name
  static idColumn: string = "objectId";
  static titleColumn: string = "title";
  static imagesColumn: string = "images";
  static priceColumn: string = "price";
  static conditionColumn: string = "condition";
  static categoryColumn: string = "category";
  static descriptionColumn: string = "description";


  constructor() {
  }
  /*USER*/
  //get the current user
  //OUTPUT: A User Object that contains all the information about the current user
  static getCurrentUser(): User{
    let cu = Parse.User.current();
    let username = cu.getUsername();
    let email = cu.getEmail();
    let avatar = cu.get(this.avatarColumn);
    let address = cu.get(this.addressColumn);
    let phoneNumber = cu.get(this.phoneNumberColumn);
    let post = cu.get(this.postColumn);
    let savedItems = cu.get(this.saveItemColumn);
    return new User(username, email, avatar, address, phoneNumber, post, savedItems);
  }

  //Update information for current user to database
  //IMPORTANT NOTE: For this function, it only updates the database,
  //so you need to modify the current User object or call getCurrentUser() to update the current_user object.
  //INPUT: (the column that you want to modify, new value)
  static async updateCurrentUser(columnName: string, updateVal: any){
    let user = Parse.User.current();
    user.set(columnName, updateVal); //Update the value
    await user.save().then(() => {
      console.log('Successful updated');
    }).catch((error: any) => {
      console.error(`Error saving: ${error}`);
    });
  }
  //Add a new saved item to current user
  //INPUT: the item PreLovedCard id of the saved item(string)
  static addnewSavedItem(newSaveItemId: string): void{
    let newSavedItems: string[] = Parse.User.current().get(this.saveItemColumn);
    if(newSavedItems == null){
      newSavedItems = [newSaveItemId];
    }else{
      newSavedItems.push(newSaveItemId);
    }
    this.updateCurrentUser(this.saveItemColumn, newSavedItems);
    this.current_user.savedItems = newSavedItems;
  }

  //Add a new saved item to current user
  //INPUT: the PreLovedCard id of the new post
  static addNewPreLovedCard(newPostId: string): void{
    let newPosts: string[] = Parse.User.current().get(this.postColumn);
    if(newPosts == null){
      newPosts = [newPostId];
    }else{
      newPosts.push(newPostId);
    }
    this.updateCurrentUser(this.postColumn, newPosts);
    this.current_user.savedItems = newPosts;
  }

  /*PreLovedCard*/
  //get a PreLovedCard by providing its id
  //INPUT: PreLovedCard's id
  //OUTPUT: the corresponding PreLovedCard, or null if that PreLovedCard does not exist.
  static getPreLovedCardById(preLovedId: string): PreLovedCard | null {
    let query = Parse.Query("Post");
    query.equalTo(this.idColumn, preLovedId);
    let post = query.first();
    if(post == null){
      return null;
    }
    let preLoved = new PreLovedCard(preLovedId);
    preLoved.title = post.get(this.titleColumn);
    preLoved.category = post.get(this.categoryColumn);
    preLoved.images = post.get(this.imagesColumn);
    preLoved.price = post.get(this.priceColumn);
    preLoved.condition = post.get(this.conditionColumn);
    preLoved.description = post.get(this.descriptionColumn);
    return preLoved;
  }
  //add a new post to database
  //INPUT: A PreLovedCard that contains all the information about this prelove item
  static async postNewPreLovedCard(preLovedCard: PreLovedCard) {
    let Post = Parse.Object.extends("Post");
    let post = new Post();
    post.set(this.idColumn, preLovedCard.id);
    post.set(this.titleColumn, preLovedCard.title);
    post.set(this.categoryColumn, preLovedCard.category);
    post.set(this.imagesColumn, preLovedCard.images);
    post.set(this.priceColumn, preLovedCard.price);
    post.set(this.conditionColumn, preLovedCard.condition);
    post.set(this.descriptionColumn, preLovedCard.description);
    await post.save().then(() => {
      console.log('Successful updated');
    }).catch((error: any) => {
      console.error(`Error saving: ${error}`);
    });
  }

  //Update information of a PreLovedCard to database
  //IMPORTANT NOTE: For this function, it only updates the database,
  //So, you need to modify the current PreLovedCard object or call getPreLovedCardById(id) to update the stored object.
  //INPUT: (PreLovedCard's id, the column that you want to modify, new value)
  static async updatePreLovedCard(preLovedId: string, columnName: string, updateVal: any){
    let query = new Parse.Query("Post");
    query.equalTo(this.idColumn, preLovedId);
    let post = await query.first();
    //NO SUCH POST
    if(post == null){
      return;
    }
    post.set(columnName, updateVal); //Update the value
    await post.save().then(() => {
      console.log('Successful updated');
    }).catch((error: any) => {
      console.error(`Error saving: ${error}`);
    });
  }
}
