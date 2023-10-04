const names = require('./04-names.js'); 
const message = require('./05-utils.js');

// testing import of multiple modules
message(names.myName, names.city, names.college);

// testing alternative export
const data = require('./06-alternative-flavor.js');

// prints out all the modules from data
console.log('\n', data);

// invoking module
require('./07-mind-grenade.js');