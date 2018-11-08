const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Port = process.env.Port|| 5000;
const items = require('./routes/api/items');
const path = require('path');

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

    // Serve static assets if in production
    if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  


app.listen(Port) ;










