const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59c690e71a7d97980481ec7e';
// var id = '59caaa65e93d28c84d0391ee';
//
// if(!ObjectID.isValid(id)){
//     console.log("ID not valid");
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log("Id not found");
//     }
//     console.log("Todo by id", todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if (!user) {
        return console.log("user not found");
    }
    console.log("User:", user);
}, ((e) => console.log(e))
);