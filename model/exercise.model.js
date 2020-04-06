// Nous sommes dans le model , c'est la que sont contenues les données a afficher
//Models represent the entities and interactions in a web application’s problem domain
//A chat app manages messages, users, and chat rooms. A restaurant app manages customers, 
//tables, and orders. How do applications define these entities and their interactions? The answer is the model layer.


const mongoose = require("mongoose");//importe la bibl mongoose odm stand for object document mapping qui utilise le model objet pour representer  les données object relationnal mapping 
//Mongoose is a Node package that interacts with a running MongoDB database.
const Schema = mongoose.Schema;// utilisation de la classe schema qui nous servira a instancier un nouvel objet schema

const exerciseSchema = new Schema ({//instanciation d'un nouvel objet a partir de la classe Schema
    username: { type: String, required: true },/*propriete de lobjet exerciseschema  username etant lui meme un objet avec 2 cles valeurs */ 
    descritpion : {type : String,required : true},
    duration : {type : Number, required : true},
    date : {type: Date , required: true}
      
},{
        timetamps:true
    });


    const Exercise = mongoose.model('Exercise',exerciseSchema);//A model maps to a collection in your MongoDB database.
    //Models are defined by passing a Schema instance to mongoose.model like this:

    //The first argument is the singular name of the collection your model is for. 
    //The second argument is your previously created Schema. In the case of our poetry web app, turning our schema into a model would look like this:
    //Models are constructors that we define based on our Schema. They represent documents which can be saved and retrieved from our database.
    // All document creation and retrieval from the database is handled by these models. 
    module.exports = Exercise;

    //Our model is a class with properties that we define in our schema.