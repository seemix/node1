const fs = require('fs');
const path = require('path');

const substituteUsers = () => {
    const personUsers = fs.readFileSync(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'), 'utf8');
    const onlineUsers = fs.readFileSync(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'), 'utf8');
    fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'), onlineUsers, {flag: 'w'}, err => {
        if (err) {
            console.log(err);
        }
    });
    fs.writeFile(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'), personUsers, {flag: 'w'}, err => {
        if (err) {
            console.log(err);
        }
    });
}

substituteUsers();
