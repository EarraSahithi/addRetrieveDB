const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const studentsSchema=new Schema({
    name:String,
    collegeName:String,
    location:String
},
{ 
    collection  :"details",
}
);

module.exports=mongoose.model('details',studentsSchema);