//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/contacts_list_db');

//acquire connection(to check if it successfull)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting db'));

//up and running  then print message
db.once('open',function(){
    console.log('sucessfully connected to the database');
})