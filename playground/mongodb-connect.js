// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err){
        return console.log('Unable to connect. Error:' + err);
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err){
    //         return console.log("Failed to insert to Todos " + err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Dane',
    //     age: 21,
    //     location: "East Lansing"
    // }, (err, result) => {
    //     if (err){
    //         return console.log("Failed to insert to Todos " + err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});