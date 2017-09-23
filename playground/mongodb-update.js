// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err){
        return console.log('Unable to connect. Error:' + err);
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("59c19ce6333637cf8e9e3db6")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        name: "Jen"
    }, {
        $inc: {
            age: 1
        },
        $set: {
            name: "Dane"
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});