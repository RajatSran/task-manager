require('../src/db/mongoose')
const User = require('../src/models/task')

User.findByIdAndUpdate('60f674647fe249c65f74ebf5',{ completed:true }).then((user) => {
    console.log(user)
    return User.countDocuments({ completed:false })
}).then((user) => {
    console.log(user)
}).catch((e) => { console.log(e) })