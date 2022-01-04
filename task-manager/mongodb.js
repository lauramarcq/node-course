
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

//shorthand for lines above:
const { MongoClient, ObjectID } = require('mongodb')

//start generating own ids with consstructor function
// const id = new ObjectID()
// console.log('Printing ID: ' + id)
// console.log(id.getTimestamp())
//this is not necessary bu it is possiblet to generate our own id.

//CRUD

const connectionURL = 'mongodb://127.0.0.1:27017' //port no need for localhost
const dabatbaseName = 'task-manager' //database name

MongoClient.connect(connectionURL, ({useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error) {
        return console.log('Inable to connect to database')
    }
    console.log('Connected correclty')
    const db = client.db(dabatbaseName)

    //CREATE

    //insert one
    // db.collection('users').insertOne({
    //     // _id: id,
    //     name: 'Bill',
    //     age: 40
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }
        //reuslt has a property called ops that contains all the documents that were inserted
        //check mongo db api documentation for more methods
    //     console.log(result.ops)
    // })
    // //insert many
    // db.collection('users').insertMany([
    //     {
    //         name: 'jen',
    //         age: 28
    //     },
    //     {
    //         name: 'bob',
    //         age: 30
    //     }
    // ], (error, results) => {
    //     if(error) {
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(results.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'renew inspection',
    //         completed: false
    //     },
    //     {
    //         description: 'pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert taks')
    //     }
    //     console.log(result.ops)
    // })

    // READ

    //find a user
// you can't find the id with the string, it  needs to use the constructor function
    // db.collection('users').findOne({_id: new ObjectID("xxx")}, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch user')
    //     }
    //     console.log(user)
    // })
    // find doesn't need a callback argument. But Find does have several cursor methods
    //toArray() is  the most popular one and the one that needs a callback argument
    // db.collection('users').find({age: 27}).toArray((error, users) => {
    //     if(error) {
    //         return console.log(error)
    //     }
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("61d43efb30cd253bcac69202")}, (error, task) => {
    //     if(error) {
    //         return console.log(error)
    //     }
    //     console.log(task)
    // })
    // db.collection('tasks').find({ completed: false}).toArray((error, tasks) => {
    //     console.log (tasks)
    // })

    //UPDATE

    // db.collection('users').updateOne({
    //     _id: new ObjectID("61d437b7d52c773b0537cdb4")
    //     }, {
    //         $inc: {
    //             age: 5
    //         }
    //     }).then((resultado) => {
    //     console.log(resultado)
    //     }).catch((error) => {
    //     console.log(error)
    //     })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set:{
    //         completed: true
    //     }
    // }).then ((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //DELETE

    // db.collection('users').deleteMany({
    //     name: 'Laura'
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('users').deleteOne({
        name: 'Bill'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })



}))
