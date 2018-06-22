//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to database');
    }

    console.log('Connected to database');

    // Find one and Update
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b2d1b1d95a9e04b3e163876')
    // }, {
    //     $set: { completed: false }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b2d275695a9e04b3e163c31')
    }, {
        $set: { name: 'Brijesh' },
        $inc: { age: 1 }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

//    db.close();
});