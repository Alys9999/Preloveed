import {Message} from "./Message";
import {GenerateData} from "./generateData";

export class Chat{
  chatId: string;
  userOneId: string;
  userTwoId: string;
  updateAt?: Date;
  messages: string[];

  constructor(userOneId: string, userTwoId: string, chatId: string, updateAt?: Date, messages?: string[]) {
    this.chatId = chatId;
    this.userOneId = userOneId;
    this.userTwoId = userTwoId;
    this.updateAt = updateAt;
    this.messages = (messages)? messages: [];
  }

  addNewMessage(user: string, messageInfo: string){
    console.log(GenerateData.createNewMessage(this, user, messageInfo));
  }

  updateMessages(message: string){
    this.messages.push(message);
    GenerateData.updateChat(this.chatId, GenerateData.messagesColumn, this.messages); //update messages array to database
  }
}
