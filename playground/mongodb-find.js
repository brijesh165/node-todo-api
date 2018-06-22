//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to database');
    }

    console.log('Connected to database');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b2d12d96e028803a108f2f6')})
    //     .toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log('Todos count : ' , count);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').find({
        name: 'Brijesh'})
        .toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });


//    db.close();
});