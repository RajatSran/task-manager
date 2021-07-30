require('../src/db/mongoose')
const User = require('../src/models/task')

/*promise chaining*/
// User.findByIdAndUpdate('60f674647fe249c65f74ebf5', { completed: false }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ completed: false })
// }).then((user) => {
//     console.log(user)
// }).catch((e) => { console.log(e) })

/*aync await*/
const findupadateandcount = async (id, completed) => {
    const user = await User.findByIdAndUpdate(id, completed)
    console.log(user)
    const count = await User.countDocuments(!completed)
    return count
}

findupadateandcount('60f6c7779365d7d31e584e40', true).then((count) => {
    console.log(count)
}).catch((e)=>{
    console.log(e)
})