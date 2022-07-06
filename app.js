const express= require('express');
const path= require('path');
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {   await mongoose.connect('mongodb://localhost:27017/tanya');    }
const app= express();
const port= 8080;

const contactschema = new mongoose.Schema({
  name: String ,
  phone: Number ,
  password: String ,
  email: String
});
const Contact = mongoose.model('Contact', contactschema);

//static files
app.use('/static', express.static('static'));
app.use(express.urlencoded())

//set the template engine  as pug
app.set('view engine','pug');

//set views directory
app.set('/views', path.join(__dirname ,'views'));

//endpoints
  /*app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
    }); */

app.get('/',(req,res)=>{
  res.status(200).render('home.pug');
});
app.get('/a',(req,res)=>{
  res.status(200).render('about.pug');
});
app.get('/m',(req,res)=>{
  res.status(200).render('menu.pug');
});

app.get('/c',(req,res)=>{
  res.status(200).render('contact.pug');
});
app.post('/c', (req, res)=>{
  var myData = new Contact(req.body);
  myData.save().then(()=>{
  res.send("This item has been saved to the database")
  }).catch(()=>{
  res.status(400).send("item was not saved to the databse")
  });
});

app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`); 
});




