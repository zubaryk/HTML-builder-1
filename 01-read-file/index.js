const fs = require('fs');
const path = require('path');
const stream = fs.createReadStream('./01-read-file/text.txt', 'utf-8');
let data = '';
stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log('End', data));
stream.on('error', error => console.log('Error', error.message));

