const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Port = process.env.Port|| 5000;
const items = require('./routes/api/items');
// db config 
const db =require('./config/keys').mongoUrl;

// bodyparser middleware
app.use(bodyParser.json());


//connect mongodb
mongoose
    .connect(db,{useNewUrlParser: true} )
    .then( () => console.log('mongoDB connected'))
    .catch(err => console.log (err));

    //use routes 
    app.use('/api/items',items);


app.listen(Port, ()=> console.log('server started on port ${Port} ')) ;










