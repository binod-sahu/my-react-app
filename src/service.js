import { getMembers, getMessages } from "./data";
import { getRandomNumber, getSortedData } from "./util/util";

export default async function getChatLog() {

  const messages = await getMessages();
  const members = await getMembers();
  const chatData = mergeChardataById(messages, members);
  const chatDatawithSorting = getSortedData(chatData);
  return Promise.resolve(chatDatawithSorting);
};


export function mergeChardataById(message, member) {
  const newArray = [];
  for (let i = 0; i < message.length; i++) {
    for (var j = 0; j < member.length; j++) {
      if (message[i].userId === member[j].id) {
        newArray.push(
          {
            'messageId': getRandomNumber(5),
            'userId': getRandomNumber(9),
            'fullName': `${member[j].firstName} ${member[j].lastName}`,
            'timestamp': new Date(message[i].timestamp).toUTCString(),
            'email': member[j].email,
            'message': message[i].message,
            'avatar': member[j].avatar || null
          });
      }
    }
  }
  return newArray;
}
