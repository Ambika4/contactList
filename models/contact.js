const mongoose= require('mongoose');

//defining your schema
const contactSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        }
    });
//convert contactSchema into schema or collection
const Contact = mongoose.model('Contact',contactSchema);

module.exports=Contact;