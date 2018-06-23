const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b2e9a610b032406dafb12b1';
// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo:', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by ID:', todo);
// }).catch((e) => console.log(e));

var id = '5b2d576fea014b032b78adf0';

User.findById(id).then((user) => {
    if(!user) {
        return console.log('Unable to find user!');
    }
    console.log('User Info:', user);
}).catch((e) => console.log(e));
