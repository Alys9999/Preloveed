export class Message{
  userId: string;
  messageInfo: string;
  messageId?: string;
  messageTime?: Date;

  constructor(userId: string, messageInfo: string, messageId?: string, messageTime?: Date) {
    this.userId = userId;
    this.messageInfo = messageInfo;
    this.messageId = messageId;
    this.messageTime = messageTime;
  }


}
