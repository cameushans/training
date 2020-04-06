const express = require('express');//imporation de express
const app = express()

const cors = require('cors');//With CORS, a server can specify who can access its assets and which HTTP request methods are allowed from external resources.
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');//importation de l'orm qui sert a communiquer avec la db 
const uri = require("./config/key").mongoURI;
//connection a la base via mongoose
mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true } );//initialisation de la connection 


const connection = mongoose.connection;//connection a la bdd

//code executer une fois la connexion ouverte event "open"
connection.once('open',()=>{
      console.log('MONGOdb database connection established succesfully')
});


 const port = process.env.PORT || 5000;

 const exerciseRouter = require('./routes/exercise');
 const userRouter = require('./routes/user');


 app.use(cors());//avoir les acces The CORS standard is needed because it allows servers to specify not just who can access its assets, but also how the assets can be accessed.


 app.use("/exercise",exerciseRouter)//si un user tape exercise il chargera tout ce qui est compris dans le fichier exercise
 app.use("/user",userRouter) //idem

//lancement de l'appplication sur le port 5000
 app.listen(port,()=>{
     console.log(`the server is running on port : ${port}`);
 })