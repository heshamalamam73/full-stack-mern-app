const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// create Schema 

const ItemSchema = new Schema({
    title: {
        type : String,
        required :true
    },
    ingerdiants :{
        
            type : Array,
            required :true
        
       
    },
    img:{
        type : String,
        required :true
    },
    date :{
        type :Date,
        default :Date.now
    }
});
module.exports= Item = mongoose.model('item', ItemSchema);

