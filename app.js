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
    },
    {
        name: "Vasyl",
        age: 40,
        city: "GM"
    }
]

const inPersonUsers = [
    {
        name: "Serhii",
        age: 25,
        city: "Kyiv"
    },
    {
        name: "Masha",
        age: 30,
        city: "MP"
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

