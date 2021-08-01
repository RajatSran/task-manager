const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())//allows to use json in application
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('server is running on port' + port)
})
/*
 /Users/rajatsran27gmail.com/Desktop/React/mongodb/bin/mongod --dbpath=/Users/rajatsran27gmail.com/Desktop/React/mongodb-data
*/