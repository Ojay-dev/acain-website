export function getUniqueUsername(firstname) {
  let now = new Date();
  let timestamp = now.getFullYear().toString();
  timestamp += (now.getMonth < 9 ? "0" : "") + now.getMonth().toString(); // JS months are 0-based, so +1 and pad with 0's
  timestamp += (now.getDate < 10 ? "0" : "") + now.getDate().toString();
  timestamp += (now.getHours < 10 ? "0" : "") + now.getHours().toString();
  timestamp += (now.getSeconds < 10 ? "0" : "") + now.getSeconds().toString();
  timestamp +=
    (now.getMilliseconds < 10 ? "0" : "") + now.getMilliseconds().toString();

  return `${firstname.toLowerCase().split(" ")[0]}${timestamp}`;
}
