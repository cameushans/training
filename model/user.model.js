// Nous sommes dans le model , c'est la que sont contenues les données a afficher
//Mongo stores data in ‘binary’ JSON (BSON) documents. BSON documents have a similar structure to JavaScript objects

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: {//collection
        type: String,
        required: true,//Data validation is intended to provide guarantees about user input. Mongoose has several built-in validators.
        unique: true,
        trim: true,
        minlength: 3
    },
},{
        timetamps:true//Timestamp − timestamp. This can be handy for recording when a document has been modified or added.
    });


    const User = mongoose.model('User',userSchema);
    module.exports = User;