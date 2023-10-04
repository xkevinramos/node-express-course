const {readFileSync, writeFileSync} = require('fs');

// Write three lines into fileA.txt without overriding
writeFileSync(
    './temporary/fileA.txt',
    'First sentence'
);

writeFileSync(
    './temporary/fileA.txt',
    '\nSecond sentence',
    {flag: 'a'}
);

writeFileSync(
    './temporary/fileA.txt',
    '\nThird sentence',
    {flag: 'a'}
);

// print contents of new fileA.txt file
console.log(readFileSync('./temporary/fileA.txt', 'utf8'));