const path = require('path');

// path that brings you back to current directory after going up two directories
const filePath = path.join(__dirname, '..', '..', '01-node-tutorial', 'answers');
console.log(filePath);