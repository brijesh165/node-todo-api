//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to database');
    }

    console.log('Connected to database');

    // DeleteMany
    //      db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //         console.log(result);
    //     });
    // DeleteOne
    //         db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //             console.log(result)
    //         });
    // Find one and delete
    //         db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //             console.log(result);
    //         });

        //  db.collection('Users').deleteMany({name: 'Brijesh'}).then((result) => {
        //     console.log(result);
        // });

            db.collection('Users').findOneAndDelete({name: 'Bhavesh'}).then((result) => {
                console.log(result);
            });


//    db.close();
});