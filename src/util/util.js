 
  export function getRandomNumber(length) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)).toString();
  }
  
  export function getSortedData(data) {
    let messages = [...data];
    messages.sort((a, b) => {
      var aTime = new Date(a.timestamp);
      var bTime = new Date(b.timestamp);
      return aTime - bTime;
    })
    return messages;
  }

  export const changeTimestamp = timestamp => (
    new Date(timestamp).toLocaleDateString()
  )