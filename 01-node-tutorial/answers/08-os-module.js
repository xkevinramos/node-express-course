const os = require("os");

// log the os' username
const userInfo = os.userInfo();
console.log(`The user's name is ${userInfo.username}.`);

const platform = os.platform();
console.log(`The user's operation system is ${platform}.`);