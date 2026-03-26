// Function to save a string to a file

const fs = require('fs');

function saveString(path, content) {
    fs.writeFileSync(path, content);
}

module.exports = saveString;