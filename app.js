const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'main'), (err) => {
    if (err) console.log(err)
});

fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
    if (err) console.log(err)
})

fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (err) => {
    if (err) console.log(err)
})

const onlineUsers = [
    {
        name: "Andrii",
        age: 22,
        city: "Lviv",
    }
]

const inPersonUsers = [
    {
        name: "Serhii",
        age: 25,
        city: "Kyiv"
    }
]

for (const onlineUser of onlineUsers) {
    let data = `NAME: ${onlineUser.name}\nAGE: ${onlineUser.age}\nCITY: ${onlineUser.city}\n\n`
    fs.appendFile(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'), data, (err) => {
        if (err) console.log(err)
    })
}


for (const inPersonUser of inPersonUsers) {
    let data = `NAME: ${inPersonUser.name}\nAGE: ${inPersonUser.age}\nCITY: ${inPersonUser.city}\n\n`
    fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'), data, (err) => {
        if (err) console.log(err)
    })
}

const substituteUsers = () => {
    const personUsers = fs.readFileSync(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'), 'utf8', (err, data) => {
        if (err) console.log(err);
    })
    const onlineUsers = fs.readFileSync(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'), 'utf8', (err, data) => {
        if (err) console.log(err);
    })
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
