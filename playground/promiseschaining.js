require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('60f6b5ad0c57c7cfb8594f06', { age: 19 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 19 })
}).then((user) => {
    console.log(user)
}).catch((e) => { console.log(e) })