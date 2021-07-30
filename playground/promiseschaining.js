require('../src/db/mongoose')
const User = require('../src/models/user')

/*--------------promise chaining------------------
User.findByIdAndUpdate('60f6b5ad0c57c7cfb8594f06', { age: 19 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 19 })
}).then((user) => {
    console.log(user)
}).catch((e) => { console.log(e) })
*/

//async-await
const updateandcount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    console.log(user)
    const count = await User.countDocuments({ age })
    return count
}

updateandcount('60f6b5ad0c57c7cfb8594f06', 19).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

