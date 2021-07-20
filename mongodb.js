const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.01:27017'
const databasename = 'task-manager'


MongoClient.connect(connectionURL, { useNewURLParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect to database!')
    }
    const db = client.db(databasename)

    db.collection('tasks').insertOne()

    /* for querying
    db.collection('users')
        .find({ $or: [{ name: 'Rajat' }, { age: 18 }] }).toArray((error, users) => {
            console.log(users)
        })
    */

    /* for updating
    db.collection('users').updateOne({
        name:'Vijay'
    },{
        $set:{
            age:42
        }
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })*/
})



