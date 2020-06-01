const express= require('express');
const path=require('path');

const port =8000;

const db =require('./config/mongoose');
const Contact=require('./models/contact');
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use(express.urlencoded());
app.use(express.static('assets'));
/*app.use(function(req,res,next)
{
    console.log("mw1");
next();
});*/

var contactlist = [
    {
        name:"Ambika",
        phone:"9836531705"
    },
    {
        name:"Ambikasoni",
        phone:"7488449971"
    },
    
    {
        name:"Ambikashekhar",
        phone:"00000000000"
    }
    
]

app.get('/',function(req,res)
{
    Contact.find({},function(err,contacts)
    {
        if(err)
        {
            console.log("Contacts are not getting fetched");
            return;
        }
        return res.render('home',
              {title:"Ambika",
             contact:contacts
             });
    });
        
    
});

app.post('/contact-list',function(req,res)
{

    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    },function(err,newContact)
    {
        if(err)
        {
            console.log("ERRor while inserting new contact",err);
            return;
        }
        console.log("inserted successfully",newContact);
        return res.redirect('back');
    })
});


app.get('/delete-contacts/', function(req,res)
{
    //fetching id with help of req

    let id=req.query.id;

    Contact.findByIdAndDelete(id,function(err)
    {
        if(err)
        {
            console.log("error while deleting the contacts");
        }
        return res.redirect('back');
        
    });
      
});
app.listen(port, function(err){
    if(err)
    {
        console.log("Error in the running server");
    }
    console.log("Succcess:",port);
});