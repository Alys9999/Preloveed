import {User} from "./User";
import Parse from "parse";
import {save} from "ionicons/icons";
import {PreLovedCard} from "./PreLovedCard";
import {Chat} from "./Chat";


export class GenerateData {
  /*USER*/
  //Store the current user's data. Be assigned upon login or signup.
  static current_user: User;
  //COLUMN NAME
  static usernameColumn: string = "username";
  static emailColumn: string = "email";
  static addressColumn: string = "address";
  static phoneNumberColumn: string = "phoneNumber";
  static postColumn: string = "post";
  static saveItemColumn: string = "saveItems";
  static avatarColumn: string = "avatarLink";
  static biographyColumn: string = "biography";
  static chatsColumn: string = "chats"

  /* PreLovedCard */
  //Column name
  static idColumn: string = "objectId";
  static titleColumn: string = "title";
  static imagesColumn: string = "images";
  static priceColumn: string = "price";
  static conditionColumn: string = "condition";
  static categoryColumn: string = "category";
  static descriptionColumn: string = "description";

  //ChatBox
  static userOneColumn: string = "userOne";
  static userTwoColumn: string = "userTwo";
  static updatedAtColumn: string = "updatedAt";

  //Message
  static ChatBoxIdColumn: string = "ChatBoxId";
  static messageInfoColumn: string = "messageInfo";
  static userIdColumn: string = "userId";
  static createdAtColumn: string = "createdAt";
  static messagesColumn: string = "messages";


  constructor() {
  }
  /*USER*/
  //get the current user
  //OUTPUT: A User Object that contains all the information about the current user
  static getCurrentUser(): User{
    let cu = Parse.User.current();
    let userId = cu.id;
    let username = cu.getUsername();
    let email = cu.getEmail();
    let avatar = cu.get(this.avatarColumn);
    let address = cu.get(this.addressColumn);
    let phoneNumber = cu.get(this.phoneNumberColumn);
    let post = cu.get(this.postColumn);
    let savedItems = cu.get(this.saveItemColumn);
    let biography = cu.get(this.biographyColumn);
    let chats = cu.get(this.chatsColumn);
    return new User(userId, username, email, avatar, address, phoneNumber, post, savedItems, biography, chats);
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

  //Get user information by id
  static getUserInfoById(id: string): User{
    let query = new Parse.Query(Parse.User);
    let targetUser = new User(id);
    query.get(id).then((user: any)=>{
      targetUser.username = user.get(this.usernameColumn)?.toString();
      targetUser.email = user.get(this.emailColumn)?.toString();
      targetUser.avatar = user.get(this.avatarColumn)?.toString();
      targetUser.address = user.get(this.addressColumn)?.toString();
      targetUser.phoneNumber = user.get(this.phoneNumberColumn)?.toString();
      targetUser.post = user.get(this.postColumn);
      targetUser.savedItems = user.get(this.saveItemColumn);
      targetUser.biography = user.get(this.biographyColumn)?.toString();
      targetUser.chats = user.get(this.chatsColumn);
    });
    return targetUser;
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
    this.current_user.savedItems = newSavedItems;
    this.updateCurrentUser(this.saveItemColumn, newSavedItems);
  }

  //Add a new saved item to current user
  //INPUT: the PreLovedCard id of the new post
  static addNewPost(newPostId: string) {
    let newPosts: string[] = Parse.User.current().get(this.postColumn);
    if (newPosts == null) {
      newPosts = [newPostId];
    } else {
      newPosts.push(newPostId);
    }
    this.current_user.savedItems = newPosts;
    this.updateCurrentUser(this.postColumn, newPosts);
  }

  static addNewChat(chatId: string){
    let newChats: string[] = Parse.User.current().get(this.chatsColumn);
    if (newChats == null) {
      newChats = [chatId];
    } else {
      newChats.push(chatId);
    }
    this.current_user.savedItems = newChats;
    this.updateCurrentUser(this.chatsColumn, newChats);
  }

  /*PreLovedCard*/
  //get a PreLovedCard by providing its id
  //INPUT: PreLovedCard's id
  //OUTPUT: the corresponding PreLovedCard, or null if that PreLovedCard does not exist.
  static getPreLovedCardById(preLovedId: string): PreLovedCard | null {
    let Post = Parse.Object.extend("Post");
    let query = new Parse.Query(Post);
    query.equalTo(this.idColumn, preLovedId);
    let preLoved = new PreLovedCard();
    preLoved.id = preLovedId;
    query.first().then((post: any) => {
      preLoved.title = post.get(this.titleColumn)?.toString();
      preLoved.category = post.get(this.categoryColumn)?.toString();
      preLoved.images = post.get(this.imagesColumn)?.toString();
      preLoved.price = post.get(this.priceColumn);
      preLoved.condition = post.get(this.conditionColumn)?.toString();
      preLoved.description = post.get(this.descriptionColumn)?.toString();
    }).catch((error: any) => {
      console.error('Error finding post:', error);
      return null;
    });
    return preLoved;
  }
  //add a new post to database, and this function will also update the current_user's post.
  //INPUT: A PreLovedCard that contains all the information about this prelove item
  static postNewPreLovedCard(preLovedCard: PreLovedCard): void{
    let Post = Parse.Object.extend("Post");
    let post = new Post();
    // Set the values of the post properties
    //post.set(this.idColumn, preLovedCard.id);
    post.set(this.titleColumn, preLovedCard.title);
    post.set(this.categoryColumn, preLovedCard.category);
    post.set(this.imagesColumn, preLovedCard.images);
    post.set(this.priceColumn, preLovedCard.price);
    post.set(this.conditionColumn, preLovedCard.condition);
    post.set(this.descriptionColumn, preLovedCard.description);
    // Save the new post to the server
    post.save().then((post: any) => {
      console.log('New post created with objectId: ' + post.id);
      this.addNewPost(post.id);
    }).catch((error: any) => {
      console.error('Error creating new post: ' + error);
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

  /*CHAT*/
  //create a new chat, and it will automatically update the chats array in currentUser
  //INPUT: User One's id, User Two's id
  static createNewChat(userOneId: string, userTwoId: string){
    let Chat = Parse.Object.extend("ChatBox");
    let chat = new Chat();
    chat.set(this.userOneColumn, userOneId);
    chat.set(this.userTwoColumn, userTwoId);
    chat.save().then((chat: any)=>{
      console.log('New chat created with objectId ' + chat.id);
      this.addNewChat(chat.id);
    }).catch((error: any) => {
      console.error('Error creating new post: ' + error);
    });
  }

  static getChatById(chatId: string): Chat{
    let Chat = Parse.Object.extend("ChatBox");
    let query = new Parse.Query(Chat);
    let targetChat = new Chat("", "", chatId);
    query.get(chatId).then((chat: any) => {
      targetChat.userOneId = chat.get(this.userOneColumn)?.toString();
      targetChat.userTwoId = chat.get(this.userTwoColumn)?.toString();
      targetChat.updateAt = chat.get(this.updatedAtColumn);
      targetChat.messages = chat.get(this.messagesColumn);
    }).catch((error: any) => {
      console.error('Error finding post:', error);
    });
    return targetChat;
  }

  static updateChat(chatId: string, columnName: string, updatedVal: any){
    let Chat = Parse.Object.extend("ChatBox");
    const chatQuery = new Parse.Query('Chat');
    chatQuery.get(chatId).then((chat: any) => {
      chat.set(columnName, updatedVal);
      return chat.save();
    }).then((chat: any) => {
      console.log('Chat updated successfully:', chat);
    }).catch((error : any) => {
      console.error('Error updating chat:', error);
    });
  }

  static createNewMessage(chat: Chat, userId: string, messageInfo: string){
    let message = Parse.Object.extend("Message");
    let newMessage = new message();
    newMessage.set(this.ChatBoxIdColumn, chat.chatId);
    newMessage.set(this.userIdColumn, userId);
    newMessage.set(this.messageInfoColumn, messageInfo);
    newMessage.save().then((message: any)=>{
      console.log('New chat created with objectId ' + message.id);
      chat.updateMessages(message.id);
    }).catch((error: any) => {
      console.error('Error creating new message: ' + error);
    });
  }

  static getMessageById(messageId: string){
    let Message = Parse.Object.extend("Message");
    let query = new Parse.Query(Message);
    let targetMessage = new Message("", "", messageId);
    query.get(messageId).then((chat: any) => {
      targetMessage.userId = chat.get(this.userIdColumn)?.toString();
      targetMessage.messageInfo = chat.get(this.messageInfoColumn)?.toString();
      targetMessage.createdAt = chat.get(this.createdAtColumn);

    }).catch((error: any) => {
      console.error('Error finding post:', error);
    });
    return targetMessage;
  }
}
